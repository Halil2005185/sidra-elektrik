import AdminSiber from "../../../components/AdminSiber/adminSiber";

function AddProduct() {
    const categories = ["Avizeler", "Lambalar", "Spot & LED", "Dekoratif", "Aksesuarlar"];
    
    return (
        <section className="flex min-h-screen bg-slate-50 font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Yeni Ürün Ekle</h1>
                    <p className="text-slate-500 mt-2">Mağazanıza yeni bir ürün tanımlayın.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-3xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Product Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Ürün Adı</label>
                                <input 
                                    type="text" 
                                    placeholder="Örn: Modern LED Avize" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            {/* Product Code */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Ürün Kodu</label>
                                <input 
                                    type="text" 
                                    placeholder="SE-001" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Satış Fiyatı (₺)</label>
                                <input 
                                    type="number" 
                                    placeholder="0.00" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            {/* Cost Price */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Geliş Fiyatı (₺)</label>
                                <input 
                                    type="number" 
                                    placeholder="0.00" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <label className="text-sm font-semibold text-slate-700 block">Kategori</label>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <label key={category} className="cursor-pointer">
                                        <input type="radio" name="category" className="peer sr-only" />
                                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 peer-checked:bg-sky-50 peer-checked:text-sky-600 peer-checked:border-sky-500 transition-colors">
                                            {category}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* File Upload */}
                        <div className="space-y-2 pt-4 border-t border-slate-100">
                            <label className="text-sm font-semibold text-slate-700">Ürün Fotoğrafı</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-sky-400 hover:bg-sky-50/50 transition-colors cursor-pointer">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-slate-600 justify-center">
                                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                                            Dosya Yükle
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </span>
                                        <p className="pl-1">veya sürükle bırak</p>
                                    </div>
                                    <p className="text-xs text-slate-500">PNG, JPG, GIF max 5MB</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="button" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5">
                                Ürünü Kaydet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddProduct;