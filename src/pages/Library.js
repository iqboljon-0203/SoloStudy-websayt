import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { libraryFiles } from "../data/libraryFiles";
const Library = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [year, setYear] = useState("");
    const [q, setQ] = useState("");

    const authors = useMemo(() => Array.from(new Set(libraryFiles.map(f => f.author).filter(Boolean))).sort(), []);
    const titles = useMemo(() => Array.from(new Set(libraryFiles.map(f => f.title).filter(Boolean))).sort(), []);
    const topics = useMemo(() => Array.from(new Set(libraryFiles.map(f => f.topic).filter(Boolean))).sort(), []);
    const years = useMemo(() => Array.from(new Set(libraryFiles.map(f => f.year).filter(Boolean))).sort((a,b)=>a-b), []);
    const filtered = useMemo(() => {
      const qlc = q.trim().toLowerCase();
      return libraryFiles.filter(f =>
        (!author || f.author === author) &&
        (!title || f.title === title) &&
        (!topic || f.topic === topic) &&
        (!year || String(f.year) === String(year)) &&
        (!qlc || [f.author, f.title, f.topic, f.subject].filter(Boolean).some(x => String(x).toLowerCase().includes(qlc)))
      );
    }, [author, title, topic, year, q]);
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
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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
              className="text-sm font-medium text-[#A7D9FF] dark:text-[#A7D9FF] transition-colors"
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
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col w-full max-w-7xl">
          <div className="flex flex-wrap justify-between items-center gap-4 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-background-dark dark:text-background-light text-4xl font-bold leading-tight tracking-tight">
                Raqamli Kutubxona
              </p>
              <p className="text-background-dark/60 dark:text-background-light/60 text-base font-normal leading-normal">
                Elektron kitoblar, ilmiy maqolalar va materiallar kutubxonasi.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-background-dark/60 dark:text-background-light/60">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-background-dark dark:text-background-light focus:outline-none focus:ring-2 focus:ring-primary border-none bg-background-light/70 dark:bg-background-dark/70 h-12 placeholder:text-background-dark/60 dark:placeholder:text-background-light/60 pl-12 pr-4 text-base font-normal leading-normal"
                placeholder="Muallif, sarlavha, mavzu yoki yil bo'yicha qidiring"
                value={q}
                onChange={(e)=>setQ(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-3 p-4 flex-wrap">
            <select value={author} onChange={(e)=>setAuthor(e.target.value)} className="h-10 rounded-lg bg-primary/20 dark:bg-primary/30 pl-4 pr-3 text-primary hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              <option value="">Muallif (barchasi)</option>
              {authors.map(a=> <option key={a} value={a}>{a}</option>)}
            </select>
            <select value={title} onChange={(e)=>setTitle(e.target.value)} className="h-10 rounded-lg bg-background-light/70 dark:bg-background-dark/70 pl-4 pr-3 text-background-dark/80 dark:text-background-light/80 hover:bg-background-light/90 dark:hover:bg-background-dark/90 transition-colors">
              <option value="">Sarlavha (barchasi)</option>
              {titles.map(t=> <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={topic} onChange={(e)=>setTopic(e.target.value)} className="h-10 rounded-lg bg-background-light/70 dark:bg-background-dark/70 pl-4 pr-3 text-background-dark/80 dark:text-background-light/80 hover:bg-background-light/90 dark:hover:bg-background-dark/90 transition-colors">
              <option value="">Mavzu (barchasi)</option>
              {topics.map(t=> <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={year} onChange={(e)=>setYear(e.target.value)} className="h-10 rounded-lg bg-background-light/70 dark:bg-background-dark/70 pl-4 pr-3 text-background-dark/80 dark:text-background-light/80 hover:bg-background-light/90 dark:hover:bg-background-dark/90 transition-colors">
              <option value="">Yil (barchasi)</option>
              {years.map(y=> <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div className="p-4 space-y-8">
            <div>
              <h2 className="text-background-dark dark:text-background-light text-2xl font-bold leading-tight tracking-tight px-4 pb-4">
                Kutubxona fayllari
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {filtered.map((f) => (
                  <div key={f.id} className="group bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                    <div className="relative p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/20 dark:bg-primary/30 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-4xl">
                            {f.type === "ppt" || f.type === "pptx" ? "slideshow" : f.type === "pdf" ? "picture_as_pdf" : "description"}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">{f.title}</h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase">{f.type} • {f.author} • {f.topic} • {f.year}</p>
                      </div>
                      <a
                        href={f.href}
                        download
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                        Yuklab olish
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400 px-4">Tanlangan filtrlar bo'yicha fayl topilmadi.</div>
              )}
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

const featuredBooks = [
  {
    title: "O'qitish san'ati",
    author: "Muallif: Dr. Emily Carter",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtviaD5m58S63r-iGnXsx0eRPhD57_cnyZDFt0PHCM1mX7Oga3ngaDjN5nPME5b4w34sGTb29K9pYVhy9inJhJlzF46qZSvl9Bd9cFdcZH0E66dgxwtJiRPG2VMiGhIiJm0d6-ajvyWJasgjB08nJU9jnq24NrE8AO7ptPWynaqD4yGxqG-n5uTzRPo6PRNbmSx38W1wcoCwNjH25cCzFg7hBNPFffB5Y1pm4K42GTw3ZuOpgFf-grLZN0LM9fIrIsBOaLWuzsVAg",
  },
  {
    title: "Ta'lim psixologiyasi",
    author: "Muallif: Prof. David Lee",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfVpitrE5uSCpLCo6v7D6wXwScdcArzgfR0lbU5T2Ghvi74W2Rc-acNzzZh442i2rRI5-rzxiO2LitH2ekPt-J8MfiBaUJO66XgV0bAukTQfyZAraPgMphEWIdoz7HoaqdHeOj-pWZ_vfYeq3sakZi5-oTdAQ3p56jxta6Au7J6ieEN461-uVdw8-Pgi6Cvf_l5gQboIuXRCWq4e6JhjLPF4FA3wHXk3gJWP4VGvfz8Z6h77sJrTabKnMQmTzCsvL4DpMZiokYIo",
  },
  {
    title: "Sinfni boshqarish",
    author: "Muallif: Ms. Sarah Johnson",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0AFIorqmzjN_ndXcb-S2JUHI2XM9wJQNISqa3Yp0DQW-2dhBdhut0fDNgrnj-PC7vVlh4AQ7tTHISj4h-O2UwE5sk5tR_JBc2MJe7i4kOeUHeoUno1D6YLuRpzIikQaUI8De6M5Qv6prKtsJwgSlSfd3eOnmJ9CeXdWQMcelJE2xS0DmUatojLwSOokiArzPSlzA4SMAoDooFynuQml2Dqfq2USI9EBDnI9NNuYn2UCZWZTqS98D6BXbzaW-ZW6yN4deWyWr4Y_k",
  },
  {
    title: "Samarali ta'lim",
    author: "Muallif: Mr. Michael Brown",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmuhGpVWX6VjMdsJrLQBvCJ_lLGmV_NMipO_PfMmxXBPGJYjRuwBiQbjaKgK8wPKCq_4z7NjMrydU5WI13L3HPGjkrwsaukILElwaO4nUL8OHiyRpw6nbTmSzBXw55Ul6a3sWEqjETZMCtOvRbqW3hNOKd9ZmJ4Fj5oQJJMrwlBsS9vz3sYTspvTPQseO2y_hgbwzajWXUC6qEv6y30pJTO8o6PnzUiEvNgM7iccGi_66tmty2kHwp4xZCGSXCukJutVa1-mAvl1U",
  },
  {
    title: "Baholash",
    author: "Muallif: Dr. Olivia Davis",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEz2Vom0Jr4B1rzcyILsANektQ8OGSbYDJLXEvFqjFhknZ1rNjsgKHXV3tuVBVScQwd-HN6fu6WXvNnjHOyc22brCuzOwaaMvRFkyQNuhl3_SEx672VWvuArm5ds73H98kQfc5RpWxgkpmQMwWCT42E-5yfWpPDS16BvVAouaJflW8XdjHZErJnq__NMoiqmg6MvtodmX2JGz_CnFN0wWnIRb67_SIuYjf9i6-uL5WmFjBb5u8hJ7zc2WNImbcmt2VWfu9RSzo1i4",
  },
  {
    title: "O'quv dasturi",
    author: "Muallif: Prof. Robert Wilson",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy1iZil9cFkdm_n9zMOfVkpKcJ6dc8i5ZgbGk0k5DViaoTBpMvXMvMpktykRBr-4--oSLQnM6RCCCsjNudKK62_f9JLOQCCTXdxcivM33Wn1uqfcj8TUjepkAf6P5DijNdEyFDiqp-aRl-uDUsSGSALy-ujwV0MYwLEh2JUEJ7Ohey4UHPqn63S1OJGxj8GWbXQ255aw9XDNapM3Outa0MK_F8oMbghWBmPMWf-PYMt0olb1lsDmWnWkxMk6JaiIbe0YeQiTI0wtE",
  },
];

const recentBooks = [
  {
    title: "Innovatsion o'qitish usullari",
    author: "Muallif: Dr. Sophia Clark",
    description:
      "Zamonaviy sinflarda o'quvchilarning faolligini va tanqidiy fikrlashni rivojlantirish uchun yangi pedagogik yondashuvlarni o'rganish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY7VVMzM6OR5vaI08EUh6NIE0O6ck7YyvRQkz5G3CsN2r4APuPeruGPKQ-DWathOMqvhGXEgPdEuxQTLXFwippxReTyXA5ugJgDwYfFgW4kgAsocPw1pP9xJbKFbqmL4iiORnEh-8E3kwQCTrqYALHL03ph1yt-lA2thOEf4OShT4k2stOEuFpneDI55-EMaDHE3pAQ_8ixsfU5KGGtfYV_6aFROftvQmg4wmfoXky6ifsR5wXEDMC14mZHVKvJfyxLSIpgp9h2sc",
  },
  {
    title: "Raqamli davrdagi ta'lim",
    author: "Muallif: Prof. Ethan Green",
    description:
      "Ta'limda texnologiyaning muammolari va imkoniyatlarini o'rganish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYtbUqQuZ-KI08rpiSwNR-envnvd01sbO1qoSoJU9sqEIo4hYschAG3-B0MhDj8nKwhk5lnykaWrXw0eYHPnuMJAin-ex8Y07010GYPeTAK4qkugHtdLEanMI3ST3WPRjdZVbF-g1hKW_3TwJpPWKpjNIuKxU3vMYhdwn3hR9ueOA4yy_czbjSejMU676iDDfgdCCrw5fGiYmFYxfwE8VI62zYiJW98zCm2zYegVKqWqSXXCCpnMqu2UjzIHODXDoowGEiTLdmAlU",
  },
  {
    title: "Inklyuziv ta'lim",
    author: "Muallif: Ms. Chloe Harris",
    description: "Barcha o'quvchilar uchun teng ta'lim muhitini yaratish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl7Iev9ko8OeegMarDgxF5ReuktQcy-cYD1IR0vruxc260QB0xXPGcbtJzdnaMgGJWcY1rekWxXmaI9MvT67D6dpsvEqcaS1bcALTvd9B9Kdxkwcd4zMP5LcPWk_XaZfqP9hNIS4nlyog0--g4b6Rp1sSj94PzpVNCI6jqgatG4BC6g6mmQUikyPa2HNfJTMAxehcDarlWaplDa2Ag9L69dZEkitn0A2pMVbt1D9SbMcowuRv6DGWG9hCwZsxntnXbLu7PnGXuP6w",
  },
  {
    title: "O'qituvchilar uchun resurslar",
    author: "Muallif: Dr. Anna Martinez",
    description:
      "Dars rejalari, ishchi varaqalar va baholash namunalarini o'z ichiga oladi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfVpitrE5uSCpLCo6v7D6wXwScdcArzgfR0lbU5T2Ghvi74W2Rc-acNzzZh442i2rRI5-rzxiO2LitH2ekPt-J8MfiBaUJO66XgV0bAukTQfyZAraPgMphEWIdoz7HoaqdHeOj-pWZ_vfYeq3sakZi5-oTdAQ3p56jxta6Au7J6ieEN461-uVdw8-Pgi6Cvf_l5gQboIuXRCWq4e6JhjLPF4FA3wHXk3gJWP4VGvfz8Z6h77sJrTabKnMQmTzCsvL4DpMZiokYIo",
  },
  {
    title: "Ta'limda baholash",
    author: "Muallif: Dr. Olivia Davis",
    description:
      "Formativ va summativ baholash usullari haqida amaliy qo'llanma.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEz2Vom0Jr4B1rzcyILsANektQ8OGSbYDJLXEvFqjFhknZ1rNjsgKHXV3tuVBVScQwd-HN6fu6WXvNnjHOyc22brCuzOwaaMvRFkyQNuhl3_SEx672VWvuArm5ds73H98kQfc5RpWxgkpmQMwWCT42E-5yfWpPDS16BvVAouaJflW8XdjHZErJnq__NMoiqmg6MvtodmX2JGz_CnFN0wWnIRb67_SIuYjf9i6-uL5WmFjBb5u8hJ7zc2WNImbcmt2VWfu9RSzo1i4",
  },
];

export default Library;
