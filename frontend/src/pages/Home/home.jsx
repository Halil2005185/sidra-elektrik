import CardList from "../../components/CardList/cardList";
import { Link } from "react-router-dom";
import ScrollTop from "../../components/ScrollTop/scrollTop";

function Home() {
    const features = [
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            ),
            title: "Hızlı Kargo",
            desc: "Siparişleriniz 24-48 saat içinde kapınızda",
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            ),
            title: "Güvenli Ödeme",
            desc: "256-bit SSL şifreleme ile güvenli alışveriş",
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            ),
            title: "Kolay İade",
            desc: "30 gün içinde ücretsiz iade garantisi",
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            ),
            title: "7/24 Destek",
            desc: "Uzman ekibimiz her zaman yanınızda",
        },
    ];
    const d = new Date()
    let year = d.getFullYear();
    const categoryCards = [
        { label: "Avizeler", href: "/chandeliers", color: "from-sky-600 to-sky-800", emoji: "🕯️" },
        { label: "Lambalar", href: "/lamps", color: "from-cyan-500 to-cyan-700", emoji: "💡" },
        { label: "Spot & LED", href: "/spotlights-led", color: "from-sky-400 to-cyan-600", emoji: "⚡" },
        { label: "Dekoratif", href: "/decorative", color: "from-sky-500 to-sky-700", emoji: "✨" },
        { label: "Aksesuarlar", href: "/accessory", color: "from-cyan-600 to-sky-800", emoji: "🔧" },
    ];

    return (
        <main className="font-sans">

            {/* ── Hero ── */}
            <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 overflow-hidden min-h-[520px] flex items-center">
                {/* Background decorative circles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sky-600/5 blur-3xl" />
                </div>

                {/* Dot grid overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/15 border border-sky-500/20 rounded-full mb-6">
                            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                            <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase">
                                Yeni Koleksiyon {year}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5">
                            Evinizi{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                Işıkla
                            </span>{" "}
                            Buluşturun
                        </h1>

                        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Avizeden LED'e, dekoratif aydınlatmadan spot sistemlerine kadar yüzlerce ürün. Kalite ve şıklık bir arada.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                to="/chandeliers"
                                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative">Ürünleri Keşfet</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Bize Ulaşın
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-10">
                            {[
                                { value: "500+", label: "Ürün Çeşidi" },
                                { value: "10K+", label: "Mutlu Müşteri" },
                                { value: "25 yıl", label: "Deneyim" },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center lg:text-left">
                                    <p className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">{value}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div className="flex-1 lg:flex hidden justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 to-cyan-400/10 blur-2xl scale-110" />
                            <div className="relative h-64 w-64 xl:h-80 xl:w-80 rounded-full bg-gradient-to-br from-sky-800/60 to-sky-900/80 border border-sky-500/20 flex items-center justify-center shadow-2xl shadow-sky-500/20">
                                <span className="text-[120px] xl:text-[160px] leading-none select-none drop-shadow-2xl">🕯️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Feature strip ── */}
            <section className="bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md group-hover:shadow-sky-100 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                                    {icon}
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">{title}</p>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Category cards ── */}
            <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                            Kategorilere{" "}
                            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">Göz Atın</span>
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">İhtiyacınıza göre aydınlatma kategorisini seçin</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categoryCards.map(({ label, href, color, emoji }) => (
                            <Link
                                key={label}
                                to={href}
                                className={`group relative flex flex-col items-center justify-center gap-3 h-36 w-44 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}
                            >
                                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <span className="text-4xl drop-shadow-lg">{emoji}</span>
                                <span className="relative text-sm font-bold tracking-wide">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Products ── */}
            <CardList />
            <ScrollTop />

        </main>
    );
}

export default Home;