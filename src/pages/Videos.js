import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Videos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
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
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/materials"
            >
              Materiallar
            </a>

            <a
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background-light dark:bg-background-dark rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <img
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2HByAbGDch1E3h_5vtzRZ9nfZgO9k9aL47gb_WE3S1dVx-JiXMYG5XER6_6-vlDTiSKtji-xRLJ2dKCjGzjnOunmxKmE61Yl3TsjfQWEMW7FprHvrQAxrOWKU3r6YuVf-wVC79N2akk19Jni__kh0LLmLIHeGi6CRpoJnSY8TNuQdnGpg-B4fD9ukni09Yc0P8pTtdCvf6f2AhUO42JLq_COTvWAjeYws4uvfs_91R6_AhflMfuhU2uFeC75Yj79KPV8F36Jqr3Q"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary/80 text-background-dark flex items-center justify-center hover:bg-primary transition-transform transform hover:scale-110">
                    <span className="material-symbols-outlined text-5xl">
                      play_arrow
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-background-dark dark:text-background-light mb-2">
                  Yuqori matematika: Mukammal qo'llanma
                </h1>
                <p className="text-background-dark/70 dark:text-background-light/70 text-sm mb-6">
                  Bu video yuqori matematika bo'yicha batafsil ma'lumot beradi,
                  asosiy tushunchalar va murakkab usullarni qamrab oladi.
                  Murakkab masalalarni qadam-baqadam tushuntirishlar va hayotiy
                  misollar orqali yechishni o'rganing.
                </p>
                <h3 className="text-lg font-semibold text-background-dark dark:text-background-light mb-4">
                  O'quv maqsadlari
                </h3>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-5 w-5 rounded border-background-dark/20 dark:border-background-light/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                      type="checkbox"
                    />
                    <span className="text-background-dark dark:text-background-light">
                      Differensial va integral hisoblashning asoslarini
                      tushunish
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-5 w-5 rounded border-background-dark/20 dark:border-background-light/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                      type="checkbox"
                    />
                    <span className="text-background-dark dark:text-background-light">
                      Optimizatsiya masalalarini hal qilish uchun yuqori
                      matematikani qo'llash
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="h-5 w-5 rounded border-background-dark/20 dark:border-background-light/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                      type="checkbox"
                    />
                    <span className="text-background-dark dark:text-background-light">
                      Yuqori matematika yordamida funksiyalar va ularning
                      xususiyatlarini tahlil qilish
                    </span>
                  </label>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-background-dark bg-primary/50 dark:bg-primary/50 hover:bg-primary/70 dark:hover:bg-primary/70 transition-colors">
                  <span className="material-symbols-outlined text-base">
                    favorite
                  </span>
                  <span>Sevimlilarga qo'shish</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-background-dark dark:text-background-light mb-4">
                Ko'rish uchun skanerlang
              </h3>
              <div className="bg-white p-2 rounded-lg">
                <img
                  alt="QR Code"
                  className="w-32 h-32"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf6u9QK8h_VawTvuQK4N7hexr2v6nkvuo9k3eAvwNt7105N1RsXKJt5fIaZ5PFGtr1emcQB2ugJJbvDPNeU1_OgavdFzTyomCTlhmpfNaUgcTAXPe2TF3Q4yIeDhxdoYgFY0MA9Vfy9stXpU5DjHho9rRw18EMOOSJzy2I0lP2JwG6DDRgNE8gv9HzA3kvIHvE0TjAg7i2YKMaLU7RvW7lhlbgJMr2o0cLttQQhc9iGEZfqM_TIw92R0c8AheWBEnGIuV_5wBSvuk"
                />
              </div>
              <p className="text-xs text-background-dark/60 dark:text-background-light/60 mt-3">
                Mobil qurilmangizda oching
              </p>
            </div>

            <h3 className="text-xl font-bold text-background-dark dark:text-background-light mt-8 lg:mt-0">
              O'xshash videolar
            </h3>
            <div className="space-y-4">
              <a
                className="flex items-center gap-4 group bg-background-light dark:bg-background-dark p-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                href="/videos"
              >
                <img
                  alt="Related video thumbnail"
                  className="w-24 h-16 object-cover rounded-md flex-shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaEQP_ot1eQGnBTFsBVfsoXVdIR5DcE_74af2ziYsNN702_IGDLU8XJPtHhpSu2aGTxAqpTNhvcUaYxIsK7RkOHZyVZ6bDfGdW7qMzBtJcFMJJ_s41RVzYahmfOXsE07p2v9xI2kFSqYuPKig46_LqDVYI46fyEfsaCaLPX6ASaB7c2N02dwJz_Xx6sQXjrprnT_zlSxE6U1LBavhmI0Vt5b8Xe6HvyUV4u6H2ArvsuyCYcA2rf90X1flWq-X486OM63BWdGwr8gI"
                />
                <div>
                  <h4 className="font-semibold text-background-dark dark:text-background-light group-hover:text-primary transition-colors">
                    Algebra asoslari
                  </h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Asosiy tushunchalar
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 group bg-background-light dark:bg-background-dark p-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                href="/videos"
              >
                <img
                  alt="Related video thumbnail"
                  className="w-24 h-16 object-cover rounded-md flex-shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr7XHLYPTgYocL9VtwSX41xRMCo_Y95Q80gUh7o_3NDilf7jzOTJBlYLsKgx2YxFVRuPKblTe9PEY9rrzVA0o2T1iehyJPUqy_KacbJ44riFZ_d0w_Oqbh89BKC1s_gB8GG_bw4RR6F4H1eYdb0vZHdnfuhmTlEsSqZccU2lTTs9fi1d_90IIt1JjvDTGX9I9_27SrDmtZ2_DkCdRbzWva_FvItiPKaThTFOSIJiBiSZcv-QuqXUSgEoxj0o89SE1OgmZpwWn9Pmo"
                />
                <div>
                  <h4 className="font-semibold text-background-dark dark:text-background-light group-hover:text-primary transition-colors">
                    Kimyoviy reaktsiyalar
                  </h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Kimyo qonunlari
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 group bg-background-light dark:bg-background-dark p-3 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                href="/videos"
              >
                <img
                  alt="Related video thumbnail"
                  className="w-24 h-16 object-cover rounded-md flex-shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWKS5c2O7z_oNEyIRSF7SLP33INJWJQlan4FSNTPNL0fUCRLjwfRI1TV86Jp_VEwJcsneZ-110oWUiUh3yg8u8cWEENbqKpNpewnpv9uzEUVmahymS4Fx-Y0-dEsoGIoC8HdjoBz439CIvnKpmOo-l6c6Su6eQXHrLdfoPQ--DCCoMPVdrkXrJx6rfZFYLv9QnVKw8erf1Qqar6Ao11yEz94WABvb_FU2d652VvBM5wax5z1D2nmJnz-1nhLZePBopSQzH1yLGeKE"
                />
                <div>
                  <h4 className="font-semibold text-background-dark dark:text-background-light group-hover:text-primary transition-colors">
                    Mexanika va harakat
                  </h4>
                  <p className="text-sm text-background-dark/70 dark:text-background-light/70">
                    Harakat qonunlari
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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

export default Videos;
