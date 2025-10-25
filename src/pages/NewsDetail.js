import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // News item-ni memoized qilish
  const currentNewsItem = useMemo(() => {
    return newsData.find((news) => news.id === parseInt(id));
  }, [id]);

  useEffect(() => {
    setNewsItem(currentNewsItem);
    setLoading(false);
    // Sahifani tepaga scroll qilish
    window.scrollTo(0, 0);
  }, [currentNewsItem]);

  // Event handlers - memoized
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-300 rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Yangilik topilmadi
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Qidirilayotgan yangilik mavjud emas.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center px-6 py-8 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Yangiliklar sahifasiga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-gray-900 backdrop-blur-sm">
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
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
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
              onClick={toggleMenu}
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
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
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
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Orqaga qaytish tugmasi */}
          <div className="mb-6 pt-4">
            <Link
              to="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Yangiliklar sahifasiga qaytish
            </Link>
          </div>

          {/* Asosiy kontent */}
          <div className="max-w-4xl mx-auto">
            {/* Rasmlar */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <img
                  src={newsItem.images ? newsItem.images[0] : newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="320"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=Rasm+yuklanmadi";
                  }}
                />
              </div>
              <div className="space-y-4">
                <img
                  src={newsItem.images ? newsItem.images[1] : newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-36 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="144"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Rasm+yuklanmadi";
                  }}
                />
                <img
                  src={newsItem.images ? newsItem.images[2] : newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-36 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="144"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Rasm+yuklanmadi";
                  }}
                />
              </div>
            </div>

            {/* Yangilik ma'lumotlari */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              {/* Kategoriya */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {newsItem.category}
                </span>
              </div>

              {/* Sarlavha */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {newsItem.title}
              </h1>

              {/* Muallif va sana */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {newsItem.author}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(newsItem.date).toLocaleDateString("uz-UZ")}
                </div>
              </div>

              {/* Qisqacha ma'lumot */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {newsItem.summary}
                </p>
              </div>

              {/* To'liq matn */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                  {newsItem.content}
                </div>
              </div>

              {/* Teglar */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Teglar:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {newsItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
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
                    fillRule="evenodd"
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"
                    clipRule="evenodd"
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

export default React.memo(NewsDetail);
