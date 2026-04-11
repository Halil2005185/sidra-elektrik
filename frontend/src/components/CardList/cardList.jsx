import { useEffect, useState } from "react";
import CardItem from "../CardItem/cardItem";
import Pagination from "../Pagonation/pagination";
import axios from "axios";

function CardList({ categorySlug, currentPage }) {
    const [activeFilter, setActiveFilter] = useState("Tümü");

    const categories = ["Tümü", "Lambalar", "Avizeler", "Spot & LED", "Dekoratif"];
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = categorySlug ? `${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[category][slug][$eq]=${categorySlug}` : `${import.meta.env.VITE_API_URL}/api/products?populate=*`
        console.log(url);

        axios.get(url)
            .then(res => {
                setProducts(res.data.data)
                console.log(products);

                // setPageCount(res.data.meta.pagination.pageCount)
            })
            .catch(err => {
                console.log(err)
            })
    }, [categorySlug, currentPage, products])
    console.log(products);


    const filteredProducts =
        activeFilter === "Tümü"
            ? products
            : products.filter((p) => p.category?.name === activeFilter);

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 rounded-full mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 animate-pulse"></span>
                        <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase">
                            Yeni Koleksiyon
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                        Öne Çıkan{" "}
                        <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                            Ürünler
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
                        En yeni ve en çok tercih edilen aydınlatma ürünlerimizi keşfedin.
                        Evinizi ışıkla donatın.
                    </p>
                </div>

                {/* Filter tabs */}
                {!categorySlug &&
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === category
                                    ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 scale-105"
                                    : "bg-white text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-slate-200 hover:border-sky-200"
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
                        />
                    ))}
                </div>

                {/* Load more / CTA */}
                <div className="text-center mt-12">
                    <button className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        {/* shimmer effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        <span className="relative">Tüm Ürünleri Gör</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Pagination />
        </section>
    );
}

export default CardList;