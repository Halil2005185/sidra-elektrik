import { Link } from "react-router-dom";

function PageBanner({ title, highlight, subtitle, breadcrumb, emoji = "💡" }) {
    return (
        <section className="relative bg-gradient-to-br from-[#3B2F1E] via-[#4A3A28] to-[#3B2F1E] py-14 overflow-hidden font-sans">
            {/* Glow blobs */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C49A3C]/8 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#D4A84B]/8 blur-3xl pointer-events-none" />

            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #C49A3C 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C49A3C]/15 border border-[#C49A3C]/25 rounded-full mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C49A3C] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#D4C5A9] tracking-widest uppercase">
                            {breadcrumb}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                        {title}{" "}
                        {highlight && (
                            <span className="bg-gradient-to-r from-[#C49A3C] to-[#E8D5A3] bg-clip-text text-transparent">
                                {highlight}
                            </span>
                        )}
                    </h1>

                    {subtitle && (
                        <p className="text-[#A89880] text-sm md:text-base mt-3 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    <div className="flex items-center justify-center md:justify-start gap-2 mt-5 text-xs text-[#6B5D4A]">
                        <Link to="/" className="hover:text-[#C49A3C] transition-colors duration-200">
                            Ana Sayfa
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span className="text-[#C49A3C] font-medium">{breadcrumb}</span>
                    </div>
                </div>

                <div className="hidden md:flex flex-shrink-0 items-center justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#C49A3C]/10 blur-2xl scale-125" />
                        <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-[#4A3A28] to-[#3B2F1E] border border-[#C49A3C]/20 flex items-center justify-center shadow-2xl shadow-[#C49A3C]/10">
                            <span className="text-6xl leading-none select-none drop-shadow-2xl">{emoji}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageBanner;
