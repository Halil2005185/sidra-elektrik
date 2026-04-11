import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function Decorative() {
    return (
        <main className="font-sans bg-slate-50 min-h-screen">
            <PageBanner
                title="Estetik ve Yaratıcı"
                highlight="Dekoratif Aydınlatma"
                subtitle="Mekânınıza karakter ve atmosfer katacak özel dekoratif aydınlatma ürünleri. Minimalist'ten bohem'e her tarz."
                breadcrumb="Dekoratif"
                emoji="✨"
            />

            {/* Stil ve İlham Bölümü */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-sky-500 font-semibold tracking-wider text-sm uppercase mb-2 block">İlham Alın</span>
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Tarzınıza <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">Uygun Dokunuşlar</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Evinizin veya ofisinizin karakterini yansıtacak farklı dekorasyon stillerini keşfedin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Stil Kartı 1 */}
                        <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                            <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&q=80" alt="Modern Stil" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Modern</h3>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Temiz çizgiler ve sade tasarımlar</p>
                            </div>
                        </div>

                        {/* Stil Kartı 2 */}
                        <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80" alt="Rustik Stil" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Rustik</h3>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Doğal materyaller ve sıcak ışık</p>
                            </div>
                        </div>

                        {/* Stil Kartı 3 */}
                        <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                            <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&q=80" alt="Endüstriyel Stil" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Endüstriyel</h3>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Metal detaylar ve vintage görünüm</p>
                            </div>
                        </div>

                        {/* Stil Kartı 4 */}
                        <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                            <img src="https://images.unsplash.com/photo-1524061614234-8449637d36ce?w=500&q=80" alt="Bohem Stil" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Bohem</h3>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Özgür, renkli ve sanatsal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CardList categorySlug="dekoratif" />
        </main>
    );
}

export default Decorative;