import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function SpotlightsLed() {
    return (
        <main className="font-sans bg-slate-50 min-h-screen">
            <PageBanner
                title="Güçlü ve Verimli"
                highlight="Spot & LED"
                subtitle="Enerji tasarruflu LED spot sistemleri, şerit aydınlatmalar ve gömme armatür çözümleri. Profesyonel mekânlar için."
                breadcrumb="Spot & LED"
                emoji="⚡"
            />
            
            {/* LED Bilgi Bölümü */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Neden <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">LED Aydınlatma?</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Modern ve verimli aydınlatma teknolojisi ile mekânlarınızı dönüştürün.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Özellik 1 */}
                        <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white mb-6 shadow-md shadow-sky-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Enerji Tasarrufu</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Geleneksel ampullere göre %80'e varan enerji tasarrufu sağlar. Hem doğayı korur hem de bütçenize katkıda bulunur.
                            </p>
                        </div>

                        {/* Özellik 2 */}
                        <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white mb-6 shadow-md shadow-sky-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Uzun Ömürlü</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Ortalama 50.000 saate varan kullanım ömrü ile sık ampul değiştirme derdine son. Yıllarca güvenle kullanabilirsiniz.
                            </p>
                        </div>

                        {/* Özellik 3 */}
                        <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white mb-6 shadow-md shadow-sky-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Estetik Tasarım</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Minimalist ve göze batmayan yapısıyla mimari projelere kolayca uyum sağlar. Şık bir atmosfer yaratır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CardList />
        </main>
    );
}

export default SpotlightsLed;