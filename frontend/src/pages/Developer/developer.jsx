function Developer() {
    return (
        <section className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4 font-sans">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl shadow-sky-500/5 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-sky-600 to-cyan-500"></div>
                <div className="px-8 pb-10 text-center -mt-16">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full p-2 shadow-lg mb-6">
                        <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Halil" 
                            alt="Halil İsmail" 
                            className="w-full h-full rounded-full bg-sky-50"
                        />
                    </div>
                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                        Full-Stack Geliştirici
                    </span>
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Halil İsmail</h1>
                    <p className="text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto">
                        Modern, hızlı ve kullanıcı dostu web uygulamaları geliştiriyorum. 
                        Yaratıcı çözümler üretmeyi ve projelerimi sürekli geliştirmeyi seviyorum. 🚀
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:+905399879801" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +90 539 987 98 01
                        </a>
                        <a href="mailto:info@sidraelektrik.com" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors duration-300 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            E-posta Gönder
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Developer;