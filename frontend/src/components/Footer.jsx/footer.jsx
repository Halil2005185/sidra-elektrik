import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    const categories = [
        { label: "Avizeler", href: "/chandeliers" },
        { label: "Lambalar", href: "/lamps" },
        { label: "Spot & LED", href: "/spotlights-led" },
        { label: "Dekoratif", href: "/decorative" },
        { label: "Aksesuarlar", href: "/accessory" },
    ];

    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white font-sans">

            {/* ── CTA Banner ── */}
            <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500">
                <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            Özel Fırsatları Kaçırmayın!
                        </h3>
                        <p className="text-sky-100 text-sm mt-1">
                            E-bültenimize abone olun, kampanyalardan ilk siz haberdar olun.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto max-w-sm">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz..."
                            className="flex-1 px-4 py-2.5 rounded-l-full text-sm text-slate-800 placeholder-slate-400 outline-none bg-white/95 focus:bg-white transition"
                        />
                        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-r-full transition-colors duration-200 whitespace-nowrap">
                            Abone Ol
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Main Footer ── */}
            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div className="space-y-4">
                    <img
                        src="/images/Logo-removebg.png"
                        alt="Sidra Elektrik"
                        className="h-14 w-auto brightness-0 invert opacity-90"
                    />
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Yıllardır ev, ofis ve ticari mekânlara kaliteli aydınlatma çözümleri sunuyoruz. Şık, dayanıklı ve enerji tasarruflu ürünler.
                    </p>
                    {/* Social */}
                    <div className="flex items-center gap-3 pt-1">
                        {[
                            { label: "Instagram", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
                            { label: "Facebook", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
                            { label: "Twitter/X", icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
                        ].map(({ label, icon }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="h-9 w-9 rounded-full bg-white/5 hover:bg-sky-500 border border-white/10 hover:border-sky-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/20"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    {icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="h-1 w-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 inline-block" />
                        Kategoriler
                    </h4>
                    <ul className="space-y-3">
                        {categories.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    to={href}
                                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-sky-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="h-1 w-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 inline-block" />
                        Hızlı Linkler
                    </h4>
                    <ul className="space-y-3">
                        {[
                            { label: "Ana Sayfa", href: "/" },
                            { label: "İletişim", href: "/contact" },
                            { label: "Hakkımızda", href: "#" },
                            { label: "Gizlilik Politikası", href: "#" },
                            { label: "Kullanım Şartları", href: "#" },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    to={href}
                                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-sky-600 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="h-1 w-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 inline-block" />
                        İletişim
                    </h4>
                    <ul className="space-y-4">
                        {[
                            {
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
                                text: "Karagoz Mah. karanfil SK. , GaziAntep, Türkiye"
                            },
                            {
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
                                text: "+905399879801"
                            },
                            {
                                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                                text: "ismailhalil073@gmail.com"
                            },
                        ].map(({ icon, text }, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="mt-0.5 h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        {icon}
                                    </svg>
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© {currentYear} Sidra Elektrik. Tüm hakları saklıdır.</p>
                    <div className="flex items-center gap-4">
                        {["Gizlilik", "Çerezler", "Koşullar"].map((item) => (
                            <a key={item} href="#" className="hover:text-sky-400 transition-colors">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;