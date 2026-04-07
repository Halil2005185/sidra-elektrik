import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);

    const navLinks = [
        { label: "Ana Sayfa", href: "/" },
        { label: "Avizeler", href: "/chandeliers" },
        { label: "Lambalar", href: "/lamps" },
        { label: "Spot & LED", href: "/spotlights-led" },
        { label: "Dekoratif", href: "/decorative" },
        { label: "Aksesuarlar", href: "/accessory" },
        { label: "İletişim", href: "/contact" },
        { label: "Admin", href: "/admin/admin-mian" },
        { label: "Geliştirici", href: "/developer" },
    ];

    return (
        <header className="w-full font-sans">
            {/* ── Top utility strip ── */}
            <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400 text-white text-xs">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
                    <p className="hidden sm:block tracking-wide">
                        Ücretsiz kargo · Hızlı teslimat · Güvenli ödeme
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="tel:+905001234567" className="hover:text-sky-100 transition-colors flex items-center gap-1">
                            {/* phone icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>0 500 123 45 67</span>
                        </a>
                        <span className="hidden sm:inline text-sky-200">|</span>
                        <a href="mailto:info@sidraelektrik.com" className="hidden sm:block hover:text-sky-100 transition-colors">
                            info@sidraelektrik.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md relative z-20">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 lg:gap-8">

                    <a href="#" className="flex-shrink-0 group">
                        <img
                            src="/images/Logo-removebg.png"
                            alt="Sidra Elektrik Logo"
                            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    <div className="hidden md:flex flex-1 max-w-xl">
                        <div
                            className={`flex w-full rounded-full overflow-hidden border-2 transition-all duration-300 ${searchFocused
                                ? "border-sky-500 shadow-lg shadow-sky-500/20"
                                : "border-slate-200 shadow-sm"
                                }`}
                        >
                            <input
                                type="text"
                                placeholder="Ürün, marka veya kategori ara..."
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                className="flex-1 px-5 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none bg-slate-50/60"
                            />
                            <button
                                type="button"
                                className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white px-6 font-semibold text-sm transition-all duration-300 flex items-center gap-1.5"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Ara
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center sm:gap-2">
                        {/* User / account */}
                        <a
                            href="#"
                            className="relative p-2 rounded-full hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-all duration-200 group"
                            title="Hesabım"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 group-hover:text-sky-600 whitespace-nowrap font-medium">
                                Hesabım
                            </span>
                        </a>

                        <a
                            href="#"
                            className="relative p-2 rounded-full hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-all duration-200 group"
                            title="Favorilerim"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-sm">
                                2
                            </span>
                            <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 group-hover:text-sky-600 whitespace-nowrap font-medium">
                                Favoriler
                            </span>
                        </a>

                        <a
                            href="#"
                            className="relative p-2 rounded-full hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-all duration-200 group"
                            title="Sepetim"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.868l1.96-8.595A1.125 1.125 0 0020.023 3H5.625l-.632 2.521M7.5 14.25l-1.044-4.771" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-sky-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-sm">
                                0
                            </span>
                            <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 group-hover:text-sky-600 whitespace-nowrap font-medium">
                                Sepetim
                            </span>
                        </a>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-full hover:bg-sky-50 text-slate-600 hover:text-sky-600 transition-all duration-200"
                            aria-label="Menüyü Aç"
                        >
                            {mobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Search bar — mobile */}
                <div className="md:hidden px-4 pb-3">
                    <div className="flex rounded-full overflow-hidden border-2 border-slate-200 shadow-sm focus-within:border-sky-500 focus-within:shadow-lg focus-within:shadow-sky-500/20 transition-all duration-300">
                        <input
                            type="text"
                            placeholder="Ürün ara..."
                            className="flex-1 px-4 py-2 text-sm text-slate-700 placeholder-slate-400 outline-none bg-slate-50/60"
                        />
                        <button
                            type="button"
                            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-4 transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Navigation bar — desktop ── */}
            <nav className="hidden lg:block bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 shadow-lg relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center justify-center gap-1">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.href}
                                    className="relative block px-5 py-3 text-sm font-medium text-white/90 hover:text-white tracking-wide transition-colors duration-200 group"
                                >
                                    {link.label}
                                    {/* animated underline */}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-white rounded-full transition-all duration-300 group-hover:w-3/4" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* ── Mobile menu overlay ── */}
            <div
                className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${mobileMenuOpen ? "visible" : "invisible"
                    }`}
            >
                {/* backdrop */}
                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMobileMenuOpen(false)}
                />
                {/* drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* drawer header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100">
                        <span className="text-lg font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                            Menü
                        </span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* drawer links */}
                    <ul className="py-2">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.href}
                                    className="flex items-center gap-3 px-5 py-3 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors duration-200 font-medium text-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* drawer footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-slate-50/80">
                        <a
                            href="tel:+905001234567"
                            className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0 500 123 45 67
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
