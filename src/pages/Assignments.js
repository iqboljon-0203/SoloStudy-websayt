import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Assignments = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
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
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/materials"
            >
              Materiallar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/videos"
            >
              Video darslar
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/tests"
            >
              Testlar
            </a>

            <a
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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
              className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold tracking-wide transition-all bg-primary/20 text-primary-light dark:text-primary hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30"
            >
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a
              href="/contact"
              className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary-light text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Bog'lanish</span>
            </a>
          </div>
        )}
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mustaqil o'qish topshiriqlari
            </h1>
          </header>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav aria-label="Tabs" className="-mb-px flex gap-6">
              <Link
                to="/assignments"
                className="shrink-0 border-b-2 border-primary px-1 pb-4 text-sm font-semibold text-primary"
              >
                Fan bo'yicha
              </Link>
              <Link
                to="/assignments/by-week"
                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Haftalar bo'yicha
              </Link>
            </nav>
          </div>
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Matematika
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          Algebra I - 3-bo'lim takrorlashi
                        </h3>
                        <span className="text-xs font-medium text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400 px-2 py-1 rounded-full">
                          Muddat: 28-oktabr
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        3-bo'limdagi chiziqli tenglamalar va tengsizliklar
                        bo'yicha takrorlash mashqlari.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-800 bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 transition-shadow shadow-sm hover:shadow-md">
                      <span className="material-symbols-outlined text-base">
                        upload_file
                      </span>
                      <span>Topshiriqni yuborish</span>
                    </button>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 bg-green-500 w-1/4"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          Geometriya - Isbotlash mashqlari
                        </h3>
                        <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-400 px-2 py-1 rounded-full">
                          Yuborilgan
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Uchburchaklar va to'rtburchaklar uchun geometriya
                        isbotlarini yozish mashqlari.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="material-symbols-outlined text-base">
                        task_alt
                      </span>
                      <span>Yuborilgan nusxani ko'rish</span>
                    </button>
                  </div>
                  <div className="h-2 bg-green-500"></div>
                </div>
              </div>
            </section>
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Fan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          Biologiya - Hujayra tuzilishi
                        </h3>
                        <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-400 px-2 py-1 rounded-full">
                          Ko'rib chiqilmoqda
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Hujayra qismlarini chizish va ularning funksiyalarini
                        tavsiflash.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="material-symbols-outlined text-base">
                        hourglass_top
                      </span>
                      <span>Baholanishni kutmoqda</span>
                    </button>
                  </div>
                  <div className="h-2 bg-yellow-500"></div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          Chemistry - Periodic Table
                        </h3>
                        <span className="text-xs font-medium text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400 px-2 py-1 rounded-full">
                          Muddat: 5-noyabr
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Elementlar va ularning xususiyatlari haqida batafsil
                        o'quv qo'llanmasi yarating.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-800 bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 transition-shadow shadow-sm hover:shadow-md">
                      <span className="material-symbols-outlined text-base">
                        upload_file
                      </span>
                      <span>Topshiriqni yuborish</span>
                    </button>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 bg-green-500 w-0"></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Tarix
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          Jahon tarixi - Uyg'onish davri san'ati
                        </h3>
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400 px-2 py-1 rounded-full">
                          Ko'rib chiqildi
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Mashhur Uyg'onish davri rassomi haqida tadqiqot
                        o'tkazing va hisobot yozing.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="material-symbols-outlined text-base">
                        rate_review
                      </span>
                      <span>Fikr-mulohazalarni ko'rish</span>
                    </button>
                  </div>
                  <div className="h-2 bg-primary/70"></div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                          AQSh tarixi - Fuqarolar urushi sabablari
                        </h3>
                        <span className="text-xs font-medium text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400 px-2 py-1 rounded-full">
                          Muddat: 12-noyabr
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Amerika Fuqarolar urushiga olib kelgan asosiy omillarni
                        tahlil qiling.
                      </p>
                    </div>
                    <button className="self-start flex items-center gap-2 text-sm font-semibold text-gray-800 bg-primary py-2 px-4 rounded-lg hover:bg-primary/90 transition-shadow shadow-sm hover:shadow-md">
                      <span className="material-symbols-outlined text-base">
                        upload_file
                      </span>
                      <span>Topshiriqni yuborish</span>
                    </button>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 bg-green-500 w-0"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
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

export default Assignments;
