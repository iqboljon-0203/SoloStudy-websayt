import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

const News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sahifani tepaga scroll qilish
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Qidiruv natijalari - memoized
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return newsData;

    return newsData.filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  // Event handlers - memoized
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
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
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 pt-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ilmiy yangiliklar
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ta'lim, pedagogika va fan sohasidagi eng so'nggi yangiliklar,
              tadqiqotlar va islohotlar haqida ma'lumot oling.
            </p>
          </div>

          {/* Search Section */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400">
                    search
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Yangiliklar bo'yicha qidiruv..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 block"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/30 dark:from-primary/30 dark:to-primary/40 flex items-center justify-center overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="192"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/30 dark:from-primary/30 dark:to-primary/40 flex items-center justify-center hidden">
                    <span className="material-symbols-outlined text-primary text-6xl">
                      article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(news.date).toLocaleDateString("uz-UZ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {news.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{news.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Batafsil →
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {news.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-gray-400 text-6xl mb-4">
                search_off
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hech qanday natija topilmadi
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Qidiruv so'zingizni o'zgartiring yoki boshqa kalit so'zlar bilan
                qidiring.
              </p>
            </div>
          )}
        </div>
      </main>

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

export default React.memo(News);
