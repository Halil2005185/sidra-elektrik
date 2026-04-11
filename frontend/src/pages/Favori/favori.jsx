import { useState, useEffect } from "react";
import CardItem from "../../components/CardItem/cardItem";
import axios from "axios";

function Favorites() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

        if (favorites.length === 0) {
            return
        }

        const filterQuery = favorites.map((id, i) => `filters[id][$in][${i}]=${id}`).join("&")

        axios.get(`${import.meta.env.VITE_API_URL}/api/products?populate=*&${filterQuery}`)
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) // ✅ setLoading هنا فقط
    }, [])
    if (loading) {
        return (
            <section className="py-16 min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                                <div className="aspect-square bg-gray-200" />
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-16 min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span className="text-xs font-semibold text-rose-500 tracking-wider uppercase">
                            Favorilerim
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                        Favori{" "}
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                            Ürünlerim
                        </span>
                    </h2>
                    <p className="text-slate-500 text-sm">
                        {products.length > 0
                            ? `${products.length} ürün favorilerinizde`
                            : "Henüz favori ürününüz yok"}
                    </p>
                </div>

                {/* Empty State */}
                {products.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="w-24 h-24 rounded-full bg-rose-50 flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">Favori ürün bulunamadı</h3>
                        <p className="text-slate-400 text-sm mb-6">Beğendiğiniz ürünleri favorilere ekleyin</p>
                        <a
                            href="/"
                            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Ürünleri Keşfet
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <CardItem
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Favorites;