import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { assignmentsData } from "../data/assignments";

const AssignmentsByWeek = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allItems = useMemo(() => {
    // Flatten all items from all subjects in case more are added later
    return assignmentsData.flatMap((s) => s.items);
  }, []);

  const parseWeek = (title) => {
    // Expect titles like "1-amaliy topshiriq" -> week = 1
    const m = title?.match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  };

  const grouped = useMemo(() => {
    const map = new Map();
    for (const it of allItems) {
      const w = parseWeek(it.title);
      if (!map.has(w)) map.set(w, []);
      map.get(w).push(it);
    }
    const weeks = Array.from(map.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([week, items]) => ({ week, items }));
    return weeks;
  }, [allItems]);

  const badgeFor = (status) => {
    if (status === "submitted")
      return {
        text: "Yuborilgan",
        cls: "text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-400",
      };
    if (status === "reviewing")
      return {
        text: "Ko'rib chiqilmoqda",
        cls: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-400",
      };
    if (status === "done")
      return {
        text: "Ko'rib chiqildi",
        cls: "text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400",
      };
    return {
      text: "Muddat yo'q",
      cls: "text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400",
    };
  };

  const progressFor = (status) => {
    if (status === "submitted") return { w: "w-1/4", color: "bg-green-500" };
    if (status === "reviewing") return { w: "w-2/4", color: "bg-yellow-500" };
    if (status === "done") return { w: "w-full", color: "bg-primary" };
    return { w: "w-0", color: "bg-green-500" };
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="text-primary-light dark:text-primary">
              <svg className="h-6 w-6 text-[#A7D9FF]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">SoloStudy</h2>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/">Bosh sahifa</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/materials">Materiallar</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/videos">Video darslar</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/tests">Testlar</a>
            <a className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors" href="/assignments">Topshiriqlar</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/library">Kutubxona</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="/about" className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold tracking-wide transition-all hover:shadow-lg bg-primary/20 text-primary-light dark:text-primary hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30">
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a href="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110">
              <span className="truncate">Bog'lanish</span>
            </a>
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">{isMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 px-4 py-4 flex flex-col gap-3">
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/">Bosh sahifa</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/materials">Materiallar</a>
            <a className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors" href="/videos">Videolar</a>
            <a className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors" href="/assignments">Topshiriqlar</a>
            <a href="/about" className="min-w[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110">Biz haqimizda</a>
            <a href="/contact" className="min-w[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110">Bog'lanish</a>
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Mustaqil o'qish topshiriqlari</h1>
          </header>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav aria-label="Tabs" className="-mb-px flex gap-6">
              <Link to="/assignments" className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200">
                Fan bo'yicha
              </Link>
              <Link to="/assignments/by-week" className="shrink-0 border-b-2 border-primary px-1 pb-4 text-sm font-semibold text-primary">
                Haftalar bo'yicha
              </Link>
            </nav>
          </div>

          <div className="space-y-12">
            {grouped.map(({ week, items }) => (
              <section key={week} className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hafta {week}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => {
                    const badge = badgeFor(item.status);
                    const pg = progressFor(item.status);
                    return (
                      <div key={item.id} className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">{item.title}</h3>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${badge.cls}`}>{badge.text}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">DOCX faylini yuklab olib ko'ring va topshirig'ingizni tayyorlang.</p>
                          </div>
                          <div className="flex gap-2">
                            <a href={item.href} download className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 transition-shadow shadow-sm hover:shadow-md">
                              <span className="material-symbols-outlined text-base">download</span>
                              <span>DOCX yuklab olish</span>
                            </a>
                            <a href={item.href} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                              <span className="material-symbols-outlined text-base">visibility</span>
                              <span>Ko'rish</span>
                            </a>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700">
                          <div className={`h-2 ${pg.color} ${pg.w}`}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 SoloStudy. Barcha huquqlar himoyalangan.</p>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
              <Link to="/privacy" className="hover:text-primary transition-colors">Maxfiylik siyosati</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Aloqa</Link>
              <Link to="/help" className="hover:text-primary transition-colors">Yordam</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssignmentsByWeek;
