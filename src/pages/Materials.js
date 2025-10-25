import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { staticPptx } from "../data/staticPptx";

const Materials = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState(null);
  const [subj, setSubj] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");

  const subjects = useMemo(() => {
    const s = Array.from(
      new Set(staticPptx.map((x) => x.subject).filter(Boolean))
    );
    return s.sort();
  }, []);
  const topics = useMemo(() => {
    const s = Array.from(
      new Set(staticPptx.map((x) => x.topic).filter(Boolean))
    );
    return s.sort();
  }, []);
  const levels = useMemo(() => {
    const s = Array.from(
      new Set(staticPptx.map((x) => x.level).filter(Boolean))
    );
    return s.sort();
  }, []);
  const filteredStatic = useMemo(() => {
    return staticPptx.filter(
      (x) =>
        (!subj || x.subject === subj) &&
        (!topic || x.topic === topic) &&
        (!level || x.level === level)
    );
  }, [subj, topic, level]);

  // Supabase removed: only static PPTX materials are displayed below

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 font-display text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-gray-900 backdrop-blur-sm mb-4">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="text-primary-light dark:text-primary">
              <svg
                className="h-8 w-8 sm:h-10 sm:w-10 text-[#A7D9FF]"
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
            <h2 className="text-base sm:text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-3 max-w-48 sm:max-w-56 lg:max-w-64">
              <span className="hidden sm:inline">
                SoloStudy.uz-O'zbek tilidagi mustaqil ta'lim platformasi
              </span>
              <span className="sm:hidden">SoloStudy.uz</span>
            </h2>
          </Link>

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
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-4 flex flex-col gap-3">
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
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200 bg-clip-text text-transparent">
              O'quv Materiallari
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Kurslar uchun materiallarni toping va yuklab oling. Turli xil
              formatidagi ta'lim materiallari bilan bilimingizni oshiring.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-xl p-4 mb-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
              Materiallarni filtrlash
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="relative">
                <select
                  value={subj}
                  onChange={(e) => setSubj(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px]"
                >
                  <option value="">Fan (barchasi)</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px]"
                >
                  <option value="">Mavzu (barchasi)</option>
                  {topics.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary min-w-[140px]"
                >
                  <option value="">Daraja (barchasi)</option>
                  {levels.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredStatic.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredStatic.map((sp) => (
                  <div
                    key={sp.id}
                    className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                  >
                    <div className="relative p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/30 dark:from-primary/30 dark:to-primary/40 rounded-xl shadow-lg">
                          <span className="material-symbols-outlined text-primary text-3xl">
                            slideshow
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg leading-tight">
                          {sp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            PPTX
                          </span>
                          {sp.subject && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {sp.subject}
                            </span>
                          )}
                        </div>
                      </div>
                      <a
                        href={sp.href}
                        download
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold hover:shadow-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:from-blue-700 hover:to-blue-800"
                      >
                        <span className="material-symbols-outlined text-base">
                          download
                        </span>
                        Yuklab olish
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {filteredStatic.length === 0 && (
            <div className="mb-12 text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-4xl">
                  search_off
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Materiallar topilmadi
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Tanlangan filtrlar bo'yicha fayllar topilmadi. Filtrlarni
                o'zgartiring yoki barcha materiallarni ko'rish uchun filtrlarni
                tozalang.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer intentionally removed for Materials page */}
      <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
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
