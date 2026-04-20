import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "/images/TonyStark.webp"
function Header() {
    const navigate = useNavigate("")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const [fevoriNum, setFevoriNum] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    )
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    )
    const [adminToken, setAdminToken] = useState(
        localStorage.getItem("adminToken")
    )

    useEffect(() => {
        function handleStorage() {
            setUser(JSON.parse(localStorage.getItem("user")))
            setAdminToken(localStorage.getItem("adminToken"))
            setFevoriNum(JSON.parse(localStorage.getItem("favorites") || "[]"))
        }
        window.addEventListener("storage", handleStorage)
        return () => window.removeEventListener("storage", handleStorage)
    }, [])
    const navLinks = [
        { label: "Ana Sayfa", href: "/" },
        { label: "Avizeler", href: "/chandeliers" },
        { label: "Lambalar", href: "/lamps" },
        { label: "Spot & LED", href: "/spotlights-led" },
        { label: "Dekoratif", href: "/decorative" },
        { label: "Aksesuarlar", href: "/accessory" },
        { label: "İletişim", href: "/contact" },
        { label: "Geliştirici", href: "/developer" },
        ...(adminToken ? [{ label: "Admin", href: "/admin/admin-mian" }] : []),
    ]


    useEffect(() => {
        function handleStorage() {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        window.addEventListener("storage", handleStorage)

        return () =>
            window.removeEventListener("storage", handleStorage)

    }, [])
    function logOut() {
        localStorage.clear()
        window.dispatchEvent(new Event("storage"))
    }
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const emailLink = isMobile
        ? "mailto:ismailhalil073@gmail.com?subject=Hello&body=Hi%20Halil,"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=ismailhalil073@gmail.com&su=Hello&body=Hi%20Halil,";
    return (

        <header className="w-full font-sans">
            {/* ── Top utility strip ── */}
            <div className="bg-gradient-to-r from-[#3B2F1E] via-[#4A3A28] to-[#3B2F1E] text-[#D4C5A9] text-xs">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
                    <p className="hidden sm:flex items-center gap-2 tracking-wide">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C49A3C] animate-pulse" />
                        Hızlı teslimat · Güvenli ödeme
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/905399879801"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp" className="hover:text-[#E8D5A3] transition-colors flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>0539 987 98 01</span>
                        </a>
                        <span className="hidden sm:inline text-[#6B5D4A]">|</span>
                        <a href={emailLink}
                            target={isMobile ? "_self" : "_blank"}
                            rel="noopener noreferrer" className="hidden sm:block hover:text-[#E8D5A3] transition-colors">
                            ismailhalil073@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Main bar ── */}
            <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-[#EDE4D6] relative z-20">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 lg:gap-8">
                    <Link to={"/"} className=" flex-shrink-0 group">
                        <img
                            src="/images/Logo-removebg.png"
                            alt="Sidra Elektrik Logo"
                            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    <div className="hidden md:flex flex-1 max-w-xl">
                        <div
                            className={`flex w-full rounded-full overflow-hidden border-2 transition-all duration-300 ${searchFocused
                                ? "border-[#C49A3C] shadow-lg shadow-[#C49A3C]/15"
                                : "border-[#EDE4D6] shadow-sm"
                                }`}
                        >
                            <form className="flex justify-between w-full" onSubmit={(e) => {
                                e.preventDefault()
                                navigate(`/search?q=${searchQuery}`)
                                setSearchQuery("")
                            }}>

                                <input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    type="text"
                                    placeholder="Ürün, marka veya kategori ara..."
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                    className="flex-1 px-5 py-2.5 text-sm text-[#3B2F1E] placeholder-[#B8A88A] outline-none bg-[#FFFBF5]"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] hover:from-[#B8860B] hover:to-[#C49A3C] text-white px-6 font-semibold text-sm transition-all duration-300 flex items-center gap-1.5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Ara
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center sm:gap-2">
                        {user ?
                            <div className="relative group h-full flex items-center pb-3 ">
                                <img
                                    src={ProfileImage}
                                    alt="profileImage"
                                    className="w-[50px] h-[50px] rounded-full object-cover ring-2 ring-[#C49A3C]/30 hover:ring-[#C49A3C] transition-all duration-300 cursor-pointer"
                                />

                                <div className="absolute top-full right-0 px-1 bg-white shadow-xl shadow-[#C49A3C]/10 rounded-xl border border-[#EDE4D6] w-[160px] hidden group-hover:flex flex-col z-50 py-2 overflow-hidden">
                                    <Link to="/profile" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#3B2F1E] hover:bg-[#FFF8EE] hover:text-[#C49A3C] transition-all duration-200 rounded-lg mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        Profil
                                    </Link>
                                    <div className="h-px bg-[#EDE4D6] mx-3 my-1" />
                                    <button onClick={logOut} className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-rose-500 hover:bg-rose-50 transition-all duration-200 rounded-lg mx-1 w-full text-left cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                        Çıkış Yap
                                    </button>
                                </div>
                            </div>
                            :
                            <Link
                                className="relative p-2 rounded-full hover:bg-[#FFF8EE] text-[#8C7B6B] hover:text-[#C49A3C] transition-all duration-200 group"
                                to={"/login"}
                                title="Hesabım"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#8C7B6B] group-hover:text-[#C49A3C] whitespace-nowrap font-medium">
                                    Hesabım
                                </span>
                            </Link>
                        }
                        <Link to={"/favori"} className="relative p-2 rounded-full hover:bg-[#FFF8EE] text-[#8C7B6B] hover:text-[#C49A3C] transition-all duration-200 group"
                            title="Favorilerim" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-sm">
                                {fevoriNum.length}
                            </span>
                            <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#8C7B6B] group-hover:text-[#C49A3C] whitespace-nowrap font-medium">
                                Favoriler
                            </span>
                        </Link>

                        <Link className="relative p-2 rounded-full hover:bg-[#FFF8EE] text-[#8C7B6B] hover:text-[#C49A3C] transition-all duration-200 group"
                            title="Sepetim" to={"/myOrders"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.868l1.96-8.595A1.125 1.125 0 0020.023 3H5.625l-.632 2.521M7.5 14.25l-1.044-4.771" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-[#C49A3C] text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-sm">
                                0
                            </span>
                            <span className="hidden lg:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#8C7B6B] group-hover:text-[#C49A3C] whitespace-nowrap font-medium">
                                Sepetim
                            </span>
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-full hover:bg-[#FFF8EE] text-[#8C7B6B] hover:text-[#C49A3C] transition-all duration-200"
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
                    <div className="flex rounded-full overflow-hidden border-2 border-[#EDE4D6] focus-within:border-[#C49A3C] focus-within:shadow-lg focus-within:shadow-[#C49A3C]/15 transition-all duration-300">
                        <form
                            className="flex justify-between w-full"
                            onSubmit={(e) => {
                                e.preventDefault()
                                navigate(`/search?q=${searchQuery}`)
                                setSearchQuery("")
                            }}>
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                type="text"
                                placeholder="Ürün ara..."
                                className="flex-1 px-4 py-2 text-sm text-[#3B2F1E] placeholder-[#B8A88A] outline-none bg-[#FFFBF5]"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white px-4 transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ── Navigation bar — desktop ── */}
            <nav className="hidden lg:block bg-gradient-to-r from-[#3B2F1E] via-[#4A3A28] to-[#3B2F1E] shadow-lg relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center justify-center gap-1">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.href}
                                    className="relative block px-5 py-3 text-sm font-medium text-[#D4C5A9] hover:text-[#F0E0B8] tracking-wide transition-colors duration-200 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#C49A3C] rounded-full transition-all duration-300 group-hover:w-3/4" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* ── Mobile menu overlay ── */}
            <div
                className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${mobileMenuOpen ? "visible" : "invisible"}`}
            >
                <div
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setMobileMenuOpen(false)}
                />
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-4 border-b border-[#EDE4D6]">
                        <span className="text-lg font-bold text-[#C49A3C]">
                            Menü
                        </span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-1.5 rounded-full hover:bg-[#FFF8EE] text-[#8C7B6B] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="py-2">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.href}
                                    className="flex items-center gap-3 px-5 py-3 text-[#3B2F1E] hover:bg-[#FFF8EE] hover:text-[#C49A3C] transition-colors duration-200 font-medium text-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#C49A3C]/40" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#EDE4D6] bg-[#FFFBF5]">
                        <a
                            href="https://wa.me/905399879801"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex items-center gap-2 text-sm text-[#8C7B6B] hover:text-[#C49A3C] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0539 987 98 01
                        </a>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
