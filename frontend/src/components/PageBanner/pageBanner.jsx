import { Link } from "react-router-dom";

/**
 * Reusable page hero banner for category pages.
 *
 * Props:
 *  - title      : string  — Main heading (supports bold span for gradient)
 *  - highlight  : string  — Gradient-highlighted word inside the title
 *  - subtitle   : string  — Description paragraph beneath the title
 *  - breadcrumb : string  — Current page label for the breadcrumb trail
 *  - emoji      : string  — Large decorative emoji shown on the right
 */
function PageBanner({ title, highlight, subtitle, breadcrumb, emoji = "💡" }) {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-14 overflow-hidden font-sans">
            {/* Glow blobs */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* Dot-grid texture */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text */}
                <div className="text-center md:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/15 border border-sky-500/20 rounded-full mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-sky-300 tracking-widest uppercase">
                            {breadcrumb}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                        {title}{" "}
                        {highlight && (
                            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                {highlight}
                            </span>
                        )}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    {/* Breadcrumb nav */}
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-5 text-xs text-slate-500">
                        <Link to="/" className="hover:text-sky-400 transition-colors duration-200">
                            Ana Sayfa
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span className="text-sky-400 font-medium">{breadcrumb}</span>
                    </div>
                </div>

                {/* Decorative emoji orb */}
                <div className="hidden md:flex flex-shrink-0 items-center justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/25 to-cyan-400/10 blur-2xl scale-125" />
                        <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-sky-800/60 to-sky-900/70 border border-sky-500/20 flex items-center justify-center shadow-2xl shadow-sky-900/40">
                            <span className="text-6xl leading-none select-none drop-shadow-2xl">{emoji}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageBanner;
