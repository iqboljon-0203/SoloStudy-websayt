import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Help = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
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
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Yordam markazi
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Ko'p so'raladigan savollar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ko'p so'raladigan savollar
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Platformadan qanday foydalanaman?
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Platformadan foydalanish uchun ro'yxatdan o'tishingiz va
                  tegishli kursni tanlashingiz kerak.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  To'lov turlari qanday?
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Biz turli xil to'lov usullarini qabul qilamiz, jumladan bank
                  kartalari va elektron hamyonlar.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Sertifikat olish mumkinmi?
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Ha, kursni muvaffaqiyatli tugatganingizdan so'ng sertifikat
                  olishingiz mumkin.
                </p>
              </li>
            </ul>
          </div>

          {/* Qo'llanma */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Qo'llanma
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Video darslarni ko'rish
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Videolarni to'liq ekranda, turli tezliklarda va subtitrlar
                  bilan ko'rishingiz mumkin.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Testlarni topshirish
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Har bir mavzu bo'yicha testlar mavjud. Ularni istalgan vaqtda
                  topshirishingiz mumkin.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Vazifalarni yuborish
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Amaliy vazifalarni bajaring va tekshirish uchun yuboring. Tez
                  orada natijalarni olasiz.
                </p>
              </li>
            </ul>
          </div>

          {/* Texnik yordam */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Texnik yordam
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Muammo haqida xabar berish
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Texnik muammoga duch kelgan bo'lsangiz, bizga xabar bering va
                  biz tez orada yordam beramiz.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Bog'lanish ma'lumotlari
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Email: support@solostudy.uz</li>
                  <li>Tel: +998 90 123 45 67</li>
                  <li>Telegram: @solostudy_support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      Bog'lanish
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

export default Help;
