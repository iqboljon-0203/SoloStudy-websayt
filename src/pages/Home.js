import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Back1 from "../assets/back1.jpg";
import Back2 from "../assets/back2.jpg";
import Back3 from "../assets/back3.jpg";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Header */}
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
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
        {/* Hero Section with Carousel */}
        <section className="relative">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            className="hero-carousel"
          >
            <div className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back1})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
                  Kelajak sari ilm bilan
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light text-gray-200 dark:text-gray-300">
                  SoloStudy — bu talabalarning mustaqil ta’lim jarayonini yangi bosqichga olib chiqish uchun yaratilgan innovatsion raqamli platforma.
                </p>
                <Link to="/materials">
                  <button className="mt-8 h-12 px-6 rounded-xl bg-primary text-text-primary-light text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 mx-auto">
                  O'qishni boshlash
                </button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back2})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
                  Interaktiv ta'lim muhiti
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light text-gray-200 dark:text-gray-300">
                  SoloStudy — o‘z ustida ishlaydigan, yangilikka intiluvchi va zamonaviy texnologiyalarni o‘zlashtirgan yoshlar uchun yaratilgan ta’lim maydoni.
                </p>
                <Link to="/videos">
                <button className="mt-8 h-12 px-6 rounded-xl bg-primary text-text-primary-light text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 mx-auto">
                  Darslarni ko'rish
                </button>
                </Link> 
              </div>
            </div>

            <div className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back3})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
                  Professional o'qituvchilar
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light text-gray-200 dark:text-gray-300">
                  SoloStudy — har bir talabaning mustaqil fikrlaydigan, ijodkor va raqamli texnologiyalardan samarali foydalana oladigan shaxs sifatida shakllanishiga ko‘maklashishdir.
                </p>
                <Link to={"/about"}>
                 <button className="mt-8 h-12 px-6 rounded-xl bg-primary text-text-primary-light text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 mx-auto">
                  O'qituvchilar bilan tanishing
                </button>
                </Link>
               
              </div>
            </div>
          </Slider>
        </section>

        {/* Purpose Section */}
        <section className="py-12 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bizning maqsadimiz:
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
             <span className="font-bold"> SoloStudy </span>platformasining asosiy maqsadi - talabalarga mustaqil ta’lim olish uchun qulay, interaktiv va zamonaviy muhit yaratish, shuningdek, o‘qituvchilarga ta’lim jarayonini innovatsion texnologiyalar orqali samarali tashkil etishda yordam berishdir.
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Platforma orqali foydalanuvchilar:
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
             <ul className="list-inside">
              <li className="mb-4">📘 Elektron darsliklar va o‘quv materiallarini o‘rganadi</li>
              <li className="mb-4">🎥 Video darslarni tomosha qiladi</li>
              <li className="mb-4">🧠 Onlayn testlar orqali o‘z bilimini tekshiradi</li>
              <li className="mb-4">💬 Forumda fikr almashadi va savollar beradi</li>
             </ul>

            </p>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Yangiliklar
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBb2zeGGFKOOrMQq1j8yHRHVYqpByQgWePEzg9CR1MvbvjyBc-_rdoSy5uh8i5h3SnaUWrg1cooFK92hmIIMDVXZxNne45o-Y-RTf4mF8q2g4tINuvlHFkKNqkW7Rin1McTRVKYSK9t2DFnynPpIvtofolaPJ7sVMG_Mnxv2UOvucaQ2c2aTZb1D-Dmt7CTcmTg3nQHtUuhWeVLNJ5zKCFBESJKhdlGns0M_wBvwKBowUkamRItL5ZJPMxIMcVUL5iUQZFBWgfqvlE")',
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Yangi matematika darsliklari
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Yangilangan matematika darsliklari va interaktiv mashqlarni
                    o'rganing.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv9b336NkfCg3pV1KrHoZCVmu4LSVNoCk17XEkeP0vh5aZoknK3Op0TRfEjfOVNLyxwG8-h1YsCffmacNnkO8ih5hM9LexOYbaQ9hh7qHc8sAGFVAoZrTPrKBTA3j56xIJQG0zVvmJ-L-14kVoWHDKGOlfCVkizIKuXNqzmwoktTagx3gzA8Iy2oxKb--_eXaij0lXSbX-dgeA3REe3koaPno9gj6PPI7SJRNgsKWzK91ZQYCEmgO2XjXk2AmH3kiciSOzV8hdwDg")',
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Interaktiv fan modullari
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Virtual laboratoriyalar va simulyatsiyalar bilan boyitilgan
                    yangi fan modullarini kashf eting.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrPYuyjG3rKBZTh2vaZOVMN_ME-UGVjUmen_VU2IXtPmzkagLjq_rbTGNHG5gP9iy7phEiE54bWie1qIBJbPnpABZuC-LGlbz4uEcxeS9bctfwjrp1wxdSjcQM4g0hCrRMMe3ipUJvNO218mT4d8Qhvu-Z7wO8_qPUffdI0X9-mR6X9VH8HLqg1u7_LJ8OiwFBkgjOzKVRS63isZouV6IPgGKicNF3SbnoGDN56hsU3Bb_o9eYSy7l_GQr5VC5wwV7vmzOYGoPv7I")',
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    O'qituvchilar uchun seminar
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Innovatsion usullar bilan o'qitish ko'nikmalaringizni
                    oshiring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Tezkor kirish
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <button className="group flex items-center justify-center gap-3 h-16 px-6 rounded-xl bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 shadow-md hover:shadow-xl transition-all">
                <span className="material-symbols-outlined text-[#A7D9FF]">
                  auto_stories
                </span>
                <Link to={"/materials"}>
                <span className="text-base font-bold text-primary-light dark:text-primary">
                  O'quv materiallari
                </span></Link>
              </button>
              <button className="group flex items-center justify-center gap-3 h-16 px-6 rounded-xl bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 shadow-md hover:shadow-xl transition-all">
                <span className="material-symbols-outlined text-[#A7D9FF]">
                  movie
                </span>
               <Link to={"/videos"}>
                <span className="text-base font-bold text-primary-light dark:text-primary">
                  Video darslar
                </span></Link>
              </button>
              <button className="group flex items-center justify-center gap-3 h-16 px-6 rounded-xl bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 shadow-md hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
                <span className="material-symbols-outlined text-[#A7D9FF]">
                  quiz
                </span>
                <Link to={"/tests"}>
                <span className="text-base font-bold text-primary-light dark:text-primary">
                  Testlar
                </span>
                </Link>
              </button>
            </div>
          </div>
        </section>
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

export default Home;
