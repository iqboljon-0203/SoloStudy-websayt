import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Back1 from "../assets/back1.jpg";
import Back2 from "../assets/back2.jpg";
import Back3 from "../assets/back3.jpg";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="text-primary-light dark:text-primary">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-[#A7D9FF]"
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 xl:gap-6 md:flex">
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

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="/about"
              className="hidden md:flex min-w-[70px] sm:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm font-bold tracking-wide transition-all hover:shadow-lg bg-primary/20 text-primary-light dark:text-primary hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30"
            >
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a
              href="/contact"
              className="flex min-w-[70px] sm:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 sm:h-10 px-2 sm:px-4 bg-primary text-text-primary-light text-xs sm:text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Bog'lanish</span>
            </a>
            <button
              className="md:hidden p-1 sm:p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-gray-800 dark:text-gray-200 text-lg sm:text-xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 px-4 py-4 flex flex-col gap-3">
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
              className="min-w-[70px] sm:min-w-[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-8 sm:h-10 px-2 sm:px-4 bg-primary text-text-primary-light text-xs sm:text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Biz haqimizda</span>
            </a>
            <a
              href="/contact"
              className="min-w-[70px] sm:min-w-[84px] cursor-pointer flex items-center justify-start overflow-hidden rounded-lg h-8 sm:h-10 px-2 sm:px-4 bg-primary text-text-primary-light text-xs sm:text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:brightness-110"
            >
              <span className="truncate">Bog'lanish</span>
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-300 hover:scale-110"
            aria-label="Oldingi slide"
          >
            <span className="material-symbols-outlined text-2xl">
              chevron_left
            </span>
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all duration-300 hover:scale-110"
            aria-label="Keyingi slide"
          >
            <span className="material-symbols-outlined text-2xl">
              chevron_right
            </span>
          </button>

          <Slider
            ref={setSliderRef}
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
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back1})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                    Kelajak sari ilm bilan
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl font-light text-gray-100 leading-relaxed mb-8">
                    SoloStudy — bu talabalarning mustaqil ta'lim jarayonini
                    yangi bosqichga olib chiqish uchun yaratilgan innovatsion
                    raqamli platforma.
                  </p>
                  <Link
                    to="/materials"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-white text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
                  >
                    O'qishni boshlash
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back2})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                    Interaktiv ta'lim muhiti
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl font-light text-gray-100 leading-relaxed mb-8">
                    SoloStudy — o'z ustida ishlaydigan, yangilikka intiluvchi va
                    zamonaviy texnologiyalarni o'zlashtirgan yoshlar uchun
                    yaratilgan ta'lim maydoni.
                  </p>
                  <Link
                    to="/videos"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-white text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
                  >
                    Darslarni ko'rish
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${Back3})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/30 dark:bg-background-dark/50"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center text-center text-white">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                    Professional o'qituvchilar
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl font-light text-gray-100 leading-relaxed mb-8">
                    SoloStudy — har bir talabaning mustaqil fikrlaydigan,
                    ijodkor va raqamli texnologiyalardan samarali foydalana
                    oladigan shaxs sifatida shakllanishiga ko'maklashishdir.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-white text-base font-bold tracking-wide transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50"
                  >
                    O'qituvchilar bilan tanishing
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        {/* Purpose Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Bizning maqsadimiz
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-primary">SoloStudy</span>{" "}
                platformasining asosiy maqsadi - talabalarga mustaqil ta'lim
                olish uchun qulay, interaktiv va zamonaviy muhit yaratish,
                shuningdek, o'qituvchilarga ta'lim jarayonini innovatsion
                texnologiyalar orqali samarali tashkil etishda yordam berishdir.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Platforma orqali foydalanuvchilar
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link
                to="/materials"
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    auto_stories
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Elektron darsliklar
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  O'quv materiallarini o'rganadi va bilimlarini mustahkamlaydi
                </p>
              </Link>

              <Link
                to="/videos"
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    movie
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Video darslar
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Interaktiv video darslarni tomosha qiladi va o'rganadi
                </p>
              </Link>

              <Link
                to="/tests"
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    quiz
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Onlayn testlar
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  O'z bilimini tekshiradi va natijalarini kuzatadi
                </p>
              </Link>

              <Link
                to="/library"
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    library_books
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Kutubxona
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Elektron kitoblar, ilmiy maqolalar va materiallar kutubxonasi.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                So'ngi ilmiy yangiliklar
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ta'lim va pedagogika sohasidagi eng so'nggi yangiliklar va
                tadqiqotlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {newsData.slice(0, 3).map((news) => (
                <Link
                  key={news.id}
                  to="/news"
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/30 dark:from-primary/30 dark:to-primary/40 flex items-center justify-center overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
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
                      <span className="text-blue-600 hover:text-blue-500 font-medium text-sm transition-colors">
                        Batafsil →
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {news.tags.slice(0, 2).map((tag, index) => (
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

            {/* View All News Button */}
            <div className="text-center mt-12">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <span>Barcha yangiliklar</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Tezkor kirish
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Platformamizning asosiy bo'limlariga tezda kirish va o'qishni
                boshlash
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                to="/materials"
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-2xl">
                      auto_stories
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    O'quv materiallari
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Elektron darsliklar, ma'ruzalar va o'quv materiallarini
                    o'rganing
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>Ko'rish</span>
                    <span className="material-symbols-outlined ml-1 text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                to="/videos"
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-2xl">
                      movie
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Video darslar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Interaktiv video darslarni tomosha qiling va o'rganing
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>Tomosha qilish</span>
                    <span className="material-symbols-outlined ml-1 text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                to="/tests"
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-2xl">
                      quiz
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Testlar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Bilimingizni tekshiring va natijalaringizni kuzating
                  </p>
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>Test topshirish</span>
                    <span className="material-symbols-outlined ml-1 text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 ">
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
