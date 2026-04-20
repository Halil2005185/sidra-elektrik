import { useEffect, useState } from "react";
import CardItem from "../CardItem/cardItem";
import Pagination from "../Pagonation/pagination";
import axios from "axios";

function CardList({ categorySlug }) {
    const [activeFilter, setActiveFilter] = useState("Tümü");
    const [loading, setLoading] = useState(false)
    const categories = ["Tümü", "Lambalar", "Avizeler", "Spot & LED", "Dekoratif"];
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    function handleDelete(id) {
        setProducts(prev => prev.filter(p => p.id !== id))
    }

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            try {
                const url = categorySlug
                    ? `${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[category][slug][$eq]=${categorySlug}&pagination[page]=${currentPage}&pagination[pageSize]=20&sort=createdAt:desc`
                    : `${import.meta.env.VITE_API_URL}/api/products?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=20&sort=createdAt:desc`

                const res = await axios.get(url)
                setProducts(res.data.data)

                if (res.data.meta?.pagination) {
                    setPageCount(res.data.meta.pagination.pageCount)
                }
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [categorySlug, currentPage])

    const filteredProducts =
        activeFilter === "Tümü"
            ? products
            : products.filter((p) => p.category?.name === activeFilter);

    if (loading) {
        return (
            <section className="py-20 min-h-screen bg-[#FFFBF5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#EDE4D6] animate-pulse">
                                <div className="aspect-[3/4] bg-[#FFF8EE]" />
                                <div className="p-4 space-y-3">
                                    <div className="h-3 bg-[#EDE4D6] rounded w-1/3" />
                                    <div className="h-4 bg-[#EDE4D6] rounded w-2/3" />
                                    <div className="h-5 bg-[#EDE4D6] rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-24 bg-gradient-to-b from-[#FFFBF5] via-white to-[#FFFBF5] font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C49A3C]/10 border border-[#C49A3C]/20 rounded-full mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C49A3C] animate-pulse"></span>
                        <span className="text-xs font-bold text-[#C49A3C] tracking-wider uppercase">
                            Koleksiyon
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D2418] mb-5 tracking-tight">
                        Öne Çıkan{" "}
                        <span className="bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] bg-clip-text text-transparent">
                            Ürünler
                        </span>
                    </h2>
                    <p className="text-[#8C7B6B] max-w-xl mx-auto text-base md:text-lg">
                        En yeni ve en çok tercih edilen aydınlatma ürünlerimizi keşfedin.
                    </p>
                </div>

                {/* Filter tabs */}
                {!categorySlug &&
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`relative px-6 py-2.5 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300 ${activeFilter === category
                                    ? "bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white shadow-lg shadow-[#C49A3C]/20 scale-105"
                                    : "bg-white text-[#8C7B6B] hover:text-[#C49A3C] border border-[#EDE4D6] hover:border-[#C49A3C]/30 shadow-sm"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                }

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                        <CardItem
                            key={product.id}
                            product={product}
                            index={index}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] hover:from-[#B8860B] hover:to-[#C49A3C] text-white font-bold rounded-full shadow-lg shadow-[#C49A3C]/20 hover:shadow-xl hover:shadow-[#C49A3C]/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        <span className="relative">Tüm Ürünleri Gör</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} pageCount={pageCount} />
        </section>
    );
}

export default CardList;