import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
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
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Jamoamiz bilan tanishing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Biz ta'limni yangilashga bag'ishlangan, o'qituvchilar, texnologlar
              va ijodkorlardan iborat jamoamiz.
            </p>
          </div>

          <div className="mt-20 space-y-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center fade-in-up">
                Asoschilar
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
                <div
                  className="flex flex-col items-center text-center fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="relative group">
                    <img
                      alt="Dr. Amelia Harper"
                      className="h-40 w-40 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQj0XrRpNB5IDLoTtnLez2n_m3VtDFcEktF7VWdLiymd4MCNE3leeAxSALSDaHOgmNFSNwr5cPnNmVD7ghwNX-ARR6ieEyosDwoDnUV3QikLONn4PZv1EYW9LKKyjFao9pfYL_IdWq55HlO_kyNtXRJEPAkDYyITMn-nGhy4pxlM_leRw0gFILaX2RTshu00R8LSB85xDH0z0r5ujUMzBgFtV_H5ulALW7tZT6sOiP1I171UmQb8kUSf191Slxph8xk1lr14AXk4w"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Dr. Amelia Harper
                    </h3>
                    <p className="text-base leading-6 text-primary">
                      Ham asoschi va Bosh direktor
                    </p>
                    <div className="mt-4 flex justify-center gap-x-6">
                      <a
                        className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        href="mailto:hello@solostudy.uz"
                        aria-label="Email Dr. Amelia Harper"
                      >
                        <span className="material-symbols-outlined">
                          alternate_email
                        </span>
                      </a>
                      <a
                        className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        href="https://solostudy.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="SoloStudy website"
                      >
                        <span className="material-symbols-outlined">link</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col items-center text-center fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="relative group">
                    <img
                      alt="Dr. Ethan Carter"
                      className="h-40 w-40 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHW-w0xGP-JrLxgdKxYQSdYBq1uQyoDLM644hA35fSGL-1GV4C7Fzo8wh_pSofiQaNkWACzuIVy_2-MvCmVvL50ATirKg9a3rBDMtCal7G2mPdIG7o1d2NE6RU_4qitaLvqeKcEJQ0-VxfyNtUhnG9Ajd0kK_gC5qs7s_rhqaIbfYuHE7ahGChMlupmhw2biFex_erDbQkLZzv4MLPq2myvrnJNJB0gs_98FeGPsHwFNb6ugCatZ91hgWaooLXg22oEfk39gJoNWw"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Dr. Ethan Carter
                    </h3>
                    <p className="text-base leading-6 text-primary">
                      Ham asoschi va Texnologiyalar bo'yicha direktor
                    </p>
                    <div className="mt-4 flex justify-center gap-x-6">
                      <a
                        className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        href="mailto:hello@solostudy.uz"
                        aria-label="Email Dr. Ethan Carter"
                      >
                        <span className="material-symbols-outlined">
                          alternate_email
                        </span>
                      </a>
                      <a
                        className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        href="https://solostudy.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="SoloStudy website"
                      >
                        <span className="material-symbols-outlined">link</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center fade-in-up">
                O'qituvchilar
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="flex flex-col items-center text-center p-6 bg-white/5 dark:bg-black/5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <img
                    alt="Ms. Olivia Bennett"
                    className="h-24 w-24 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9LqjYvPS1HgjqA_JXJYO30oxf0nmKhDItot3VxP6Ac5v60cdXkU49ctwotPX-7owXkTs7t2iAMWVuAp-RohTUDctDtj1yjh4nBjJ53Yswt1MzdJVxeGFXnZwdLGxtZT6I3DlU_ycISqM1ZO3Raojyp8FUSEKMpJgy-qwxyBywNnZl7QvWhoreJElfTWA7Fx2TpB2yAXQiQQCpEzgsdFt3CK2ypOaxo-IQpJSRhMPOWgBSMqAyc37souYKBK1pHzRzQ7DiLMCmp94"
                  />
                  <div className="mt-4">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Ms. Olivia Bennett
                    </h3>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      Matematika o'qituvchisi
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col items-center text-center p-6 bg-white/5 dark:bg-black/5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <img
                    alt="Mr. Noah Thompson"
                    className="h-24 w-24 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXtQruoprgF73P-ITgN9HwMH4QaaXGSUGfOKlCUl0IiPYlf3aE2-9ZXEB4lcNhKvGJG8sEyHDzaOOZMJNN6WWLPfX1Zg3AgtQYwTWzdac_S6lHyx6mTJcjgo9sygfAF7Si9C4Gun-D60fHt3ZZORyijzeddJ6VLolvIsAM0WtQgqRcr1Ex3KYudqI2w-Lo3mm4qoBjM3GcVxTSwA3ZWBtODMy3kYY33rjFndSobug2tnQy-U50ClbEwoaQEcyK_alEkMgwYOBjpqQ"
                  />
                  <div className="mt-4">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Mr. Noah Thompson
                    </h3>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      Fanlar o'qituvchisi
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col items-center text-center p-6 bg-white/5 dark:bg-black/5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <img
                    alt="Dr. Sophia Clark"
                    className="h-24 w-24 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFSxlospuOVYXZRWlEvJuTJf3obwGmocBl0QBfNG9V_Z85K0jgBM53wL2zV5r7SWw8vDp5_x2f77-iXmRBnlHIj5f72Fkfci19ohXZIzr73XTfbkRm18cOuZ4CH0dznzIwzcwxuMTjS3_F-7wESqZo8KyjzSjeLwjRF_mdJ9r64CV9RunGoyYkXbAkfkus00LiuH6QmLIjiLq_FUPDka-ko4zmxrUAzNXIK-RZZtYwQA1iE1eorwW4SquGFO4zLIKKME3Ra-Wap7M"
                  />
                  <div className="mt-4">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Dr. Sophia Clark
                    </h3>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      Adabiyot o'qituvchisi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Biz bilan bog'laning
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Savollar yoki fikr-mulohazalaringiz bormi? Sizdan xabar
                  kutamiz.
                </p>
              </div>

              <form action="#" method="POST" className="mx-auto mt-10 max-w-xl">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Ismingiz
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-lg border-0 px-3.5 py-2 bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Elektron pochta
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-lg border-0 px-3.5 py-2 bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                        placeholder="Elektron pochtangizni kiriting"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    >
                      Xabar
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-lg border-0 px-3.5 py-2 bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                        placeholder="Xabaringizni kiriting"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                  >
                    Xabar yuborish
                  </button>
                </div>
              </form>
            </div>

            <div className="text-center fade-in-up">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Minnatdorchilik
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 mx-auto max-w-3xl">
                Hamkorlarimiz va yordam beruvchi xodimlarga cheksiz
                minnatdorchilik bildiramiz. Platformani yaratishda bilimlarini
                va resurslarini bo'lishgan ta'lim muassasalari va
                mutaxassislarga alohida rahmat.
              </p>
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

export default About;
