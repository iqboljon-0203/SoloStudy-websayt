import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Tests = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen">
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
              className="text-sm font-medium text-gray-600 hover:text-[#A7D9FF] dark:text-gray-300 dark:hover:text-[#A7D9FF] transition-colors"
              href="/videos"
            >
              Videolar
            </a>

            <a
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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

      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Onlayn test: Ma'lumotlar tuzilmasi
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Bilimingizni sinash uchun quyidagi savollarni yeching.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Jarayon
              </span>
              <span className="text-sm font-bold text-primary">60%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                <span className="text-primary font-bold">Savol 1:</span> Bir
                nechta javobdan biri
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Quyidagilardan qaysi biri ma'lumotlar tuzilmasi turi emas?
              </p>
              <div className="space-y-3">
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question1"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Massiv (Array)
                  </span>
                </label>
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question1"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Bog'langan ro'yxat (Linked List)
                  </span>
                </label>
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question1"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Daraxt (Tree)
                  </span>
                </label>
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    defaultChecked
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question1"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Algoritm
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                <span className="text-primary font-bold">Savol 2:</span> To'g'ri
                yoki noto'g'ri
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To'g'ri yoki noto'g'ri: Ikkilik qidiruv faqat saralangan
                massivlarga tatbiq etiladi.
              </p>
              <div className="space-y-3">
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    defaultChecked
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question2"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    To'g'ri
                  </span>
                </label>
                <label className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                  <input
                    className="form-radio text-primary focus:ring-primary focus:ring-offset-0"
                    name="question2"
                    type="radio"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Noto'g'ri
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                <span className="text-primary font-bold">Savol 3:</span>{" "}
                Ochilgan savol
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rekursiya tushunchasini misol bilan tushuntiring.
              </p>
              <textarea
                className="w-full h-36 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 focus:ring-primary focus:border-primary transition-colors text-sm text-gray-700 dark:text-gray-300"
                placeholder="Javobingizni shu yerga yozing..."
              ></textarea>
            </div>

            <div className="text-right">
              <button className="px-8 py-3 text-base font-bold text-gray-800 bg-primary rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all">
                Testni yuborish
              </button>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Test natijalari
            </h2>
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg mb-8 flex items-center gap-4">
              <p className="text-lg font-semibold text-primary">
                Siz 3 savoldan 2tasiga to'g'ri javob berdingiz.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-red-500/10 dark:bg-red-500/20 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Savol 1
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Sizning javobingiz:{" "}
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    Algoritm (Noto'g'ri)
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  To'g'ri javob:{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Algoritm
                  </span>
                </p>
                <div className="p-3 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Izoh:</span> Algoritm — bu
                    ko'rsatmalar majmuasi bo'lib, ma'lumotlar tuzilmasi emas.
                  </p>
                </div>
              </div>

              <div className="bg-green-500/10 dark:bg-green-500/20 p-6 rounded-xl border border-green-500/20">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Savol 2
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Sizning javobingiz:{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    To'g'ri (To'g'ri)
                  </span>
                </p>
                <div className="p-3 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Izoh:</span> Ikkilik qidiruv
                    elementlarni samarali topish uchun saralangan massivni talab
                    qiladi.
                  </p>
                </div>
              </div>

              <div className="bg-green-500/10 dark:bg-green-500/20 p-6 rounded-xl border border-green-500/20">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Savol 3
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Sizning javobingiz:{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    [Foydalanuvchi javobi] (To'g'ri)
                  </span>
                </p>
                <div className="p-3 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Izoh:</span> Rekursiya — bu
                    funksiya muammoning kichikroq nusxalarini hal qilish uchun
                    o'zini chaqiradi. Misol: faktoriyal hisoblash.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Statistika paneli
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      Vaqt davomida rivojlanish
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      So'nggi 7 kun
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                      80%
                    </p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      +10%
                    </p>
                  </div>
                </div>
                <div className="h-48">
                  <svg
                    fill="none"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 472 150"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#A7D9FF"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="#A7D9FF"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z"
                      fill="url(#chartGradient)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#A7D9FF"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  O'rtacha ball
                </h3>
                <p className="text-3xl font-bold text-primary">85%</p>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Muvaffaqiyat darajasi
                </h3>
                <p className="text-3xl font-bold text-primary">75%</p>
              </div>

              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Olingan medallar
                </h3>
                <p className="text-3xl font-bold text-primary">3</p>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Sizning medallaringiz
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div
                    className="aspect-square bg-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_7iPHqx8PJK-heKTxc-T8EcPLfwpFG6IeZdQBEMPF3eUkXemVy9BHm5XtwhYuxJE-qZJTyUWkjRAkBe5GQgNdA3GNaK7hzInH_Ew34SficKmt9kB03a9Bxdl5UG_oXpzNJLUv_e-wrFySIhhU14Elbhi91k7TMPodUcoIXjS0A_Jso5Ih1I2rIwKHCvhc7GyfrATHic33y-ZokgKv40q__7fKXGo8BYNWq-Nj5aEMBS8fG7_lXK0pe6c-IIvpOo-uPy8z4pinQB8" )',
                    }}
                  ></div>
                  <div
                    className="aspect-square bg-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABbxk9T5xNQ6jlLIBGkL4youMizU9O7WpQjynyiw3fD7lZll868yQXBt5wt_2X7TCri7bM46VErHmVt_6XY7ah7EhFCbDDChoFLetS1jIid8Tg39MYIS0rg5SwG2JHmD2E9HemKsN3M1-y9CzFCJYzPOAeMJbLdf72to2uNQ4781vKq8KoWr8pMvOmfcXXkfpg8CwDTDNgz6msmcSblUFUNh4Q6LAQajT5VwZWBQjequ1u5thUUEWzQNXnnhVeQJG1_mgVFyeOBAI" )',
                    }}
                  ></div>
                  <div
                    className="aspect-square bg-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPptwh90U-pkTLqejHQqwjlprzDOEOtLioT48QAmoObRjbroI5dir7hvU-uuU68qPniHW_aJvYuK1ABpf4BmojI3w44BkYv3Y_sexOWCPZjor-oDEAfO_-19S94Xo29VaZ5z2rqLv6XS_hnGbspRtxD_H776Lm2DSiRphcxXjnlVufR5yuH-kW5busy4odLZPWoRHYUpWj_1dQZyeSMNDQJlfDP0Sm8biL2yHP2oeRvtYcfxAW4UU-PTZMS6OthfNKb1aNvrV1SNY" )',
                    }}
                  ></div>
                </div>
              </div>
            </div>
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

export default Tests;
