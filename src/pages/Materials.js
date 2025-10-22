import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { staticPptx } from "../data/staticPptx";

const Materials = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [subj, setSubj] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");

  const subjects = useMemo(() => {
    const s = Array.from(new Set(staticPptx.map((x) => x.subject).filter(Boolean)));
    return s.sort();
  }, []);
  const topics = useMemo(() => {
    const s = Array.from(new Set(staticPptx.map((x) => x.topic).filter(Boolean)));
    return s.sort();
  }, []);
  const levels = useMemo(() => {
    const s = Array.from(new Set(staticPptx.map((x) => x.level).filter(Boolean)));
    return s.sort();
  }, []);
  const filteredStatic = useMemo(() => {
    return staticPptx.filter((x) => (!subj || x.subject === subj) && (!topic || x.topic === topic) && (!level || x.level === level));
  }, [subj, topic, level]);

  const downloadFile = async (materialId) => {
    try {
      const material = materials.find((m) => m.id === materialId);
      if (!material?.storage_path) return;

      const { data, error } = await supabase.storage
        .from("materials")
        .download(material.storage_path);

      if (error) throw error;

      // Create blob URL and trigger download
      const blob = new Blob([data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = material.storage_path.split("/").pop(); // Use original filename
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error("Yuklashda xatolik:", error.message);
      setError("Faylni yuklab olishda xatolik yuz berdi");
    }
  };

  const uploadFile = async (file) => {
    try {
      setUploading(true);

      // Generate a unique file path
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).slice(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from("materials")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Create database entry
      const { error: dbError } = await supabase.from("materials").insert([
        {
          title: file.name.split(".")[0], // Use filename as title
          storage_path: filePath,
          file_type: fileExt.toUpperCase(),
          file_size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) throw dbError;

      // Refresh materials list
      fetchMaterials();
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("materials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error) {
      setError(error.message || "Xato yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm mb-4">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="text-primary-light dark:text-primary">
              <svg
                className="h-6 w-6 text-[#A7D9FF]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              SoloStudy
            </h2>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/"
            >
              Bosh sahifa
            </a>
            <a
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
              href="/materials"
            >
              Materiallar
            </a>

            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/videos"
            >
              Videolar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/tests"
            >
              Testlar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/assignments"
            >
              Topshiriqlar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/library"
            >
              Kutubxona
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/about"
              className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold tracking-wide transition-all hover:shadow-lg bg-primary/20 text-primary-light dark:text-primary hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30"
            >
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a
              href="/contact"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Bog'lanish</span>
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 px-4 py-4 flex flex-col gap-3">
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/"
            >
              Bosh sahifa
            </a>
            <a
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
              href="/materials"
            >
              Materiallar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/videos"
            >
              Videolar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/tests"
            >
              Testlar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/assignments"
            >
              Topshiriqlar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/library"
            >
              Kutubxona
            </a>
            <a
              href="/about"
              className="min-w-[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a
              href="/contact"
              className="min-w-[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Bog'lanish</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O'quv Materiallari
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Kurslar uchun materiallarni toping va yuklab oling.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select
                  value={subj}
                  onChange={(e) => setSubj(e.target.value)}
                  className="bg-white dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <option value="">Fan (barchasi)</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="bg-white dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <option value="">Mavzu (barchasi)</option>
                  {topics.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="bg-white dark:bg-background-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <option value="">Daraja (barchasi)</option>
                  {levels.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredStatic.length > 0 && (
            <div className="mb-12">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredStatic.map((sp) => (
                  <div key={sp.id} className="group bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                    <div className="relative p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/20 dark:bg-primary/30 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-4xl">slideshow</span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{sp.title}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500">PPTX</p>
                      </div>
                      <a
                        href={sp.href}
                        download
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                        Yuklab olish
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {filteredStatic.length === 0 && (
            <div className="mb-12 text-center text-gray-500 dark:text-gray-400">Tanlangan filtrlar bo'yicha fayllar topilmadi.</div>
          )}

          {/* Materials Grid */}
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <div className="text-center">
                <div className="loader mb-4 mx-auto" />
                <p className="text-gray-600 dark:text-gray-400">
                  Yuklanmoqda...
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500 py-10">
              {error}
            </div>
          ) : materials.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-10">
              Materiallar topilmadi.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {materials.map((m) => (
                <div
                  key={m.id}
                  className="group bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/20 dark:bg-primary/30 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-4xl">
                          {m.file_type &&
                          m.file_type.toLowerCase().includes("pdf")
                            ? "description"
                            : m.file_type &&
                                m.file_type.toLowerCase().includes("ppt")
                              ? "slideshow"
                              : m.file_type &&
                                  (m.file_type.toLowerCase().includes("doc") ||
                                    m.file_type.toLowerCase().includes("docx"))
                                ? "edit_document"
                                : "description"}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {m.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {m.author || "Noma'lum muallif"}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {m.file_type
                          ? `${m.file_type.toUpperCase()}${m.file_size ? ` - ${m.file_size}` : ""}`
                          : ""}
                      </p>
                    </div>
                    <button
                      onClick={() => downloadFile(m.id)}
                      disabled={!m.storage_path}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      {uploading ? "Yuklanmoqda..." : "Yuklab olish"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              href="/materials?page=1"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </a>
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-gray-800 font-semibold text-sm"
              href="/materials?page=1"
            >
              1
            </a>
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
              href="/materials?page=2"
            >
              2
            </a>
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
              href="/materials?page=3"
            >
              3
            </a>
            <span className="text-gray-500 dark:text-gray-400">...</span>
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
              href="/materials?page=8"
            >
              8
            </a>
            <a
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              href="/materials?page=2"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer intentionally removed for Materials page */}
      <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 SoloStudy. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors"
              >
                Maxfiylik siyosati
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Aloqa
              </Link>
              <Link to="/help" className="hover:text-primary transition-colors">
                Yordam
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.714 2.714c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.714 2.714c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.714-2.714c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.714-2.714c.636-.247 1.363.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.146 0-3.882 1.736-3.882 3.882s1.736 3.882 3.882 3.882 3.882-1.736 3.882-3.882S14.146 8.118 12 8.118zM12 14.167c-1.203 0-2.167-.964-2.167-2.167s.964-2.167 2.167-2.167 2.167.964 2.167 2.167-.964 2.167-2.167 2.167zm5.298-6.046a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Materials;
