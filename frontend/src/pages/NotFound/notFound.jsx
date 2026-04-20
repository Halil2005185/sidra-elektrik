import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#FFFBF5] px-6 py-24 select-none font-sans">
            <div className="text-center max-w-lg mx-auto">
                <p className="text-lg font-semibold text-[#C49A3C]">Error 404</p>
                <h1 className="mt-2 text-7xl font-black tracking-tight bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] bg-clip-text text-transparent drop-shadow-sm sm:text-9xl">
                    404
                </h1>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#2D2418] sm:text-4xl">
                    Sayfa Bulunamadı
                </h2>
                <p className="mt-4 text-base leading-7 text-[#8C7B6B]">
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL'yi kontrol edin veya ana sayfaya dönün.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <Link
                        to="/"
                        className="rounded-full bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#C49A3C]/20 hover:shadow-lg hover:shadow-[#C49A3C]/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        to="/contact"
                        className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#3B2F1E] shadow-sm border border-[#EDE4D6] hover:bg-[#FFF8EE] hover:border-[#C49A3C]/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        İletişim
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;