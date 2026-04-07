import { useState } from "react";
import CardItem from "../CardItem/cardItem";
import Pagination from "../Pagonation/pagination";

function CardList() {
    const [activeFilter, setActiveFilter] = useState("Tümü");

    const categories = ["Tümü", "Lambalar", "Avizeler", "Spot & LED", "Dekoratif"];

    const products = [
        {
            id: 1,
            name: "Modern LED Tavan Lambası",
            image: "https://placehold.co/400x400/0ea5e9/white?text=Lamba+1",
            price: 450,
            costPrice: 200,
            category: "Lambalar",
            code: "SE-001",
            description: "Şık tasarım, enerji tasarruflu LED aydınlatma"
        },
        {
            id: 2,
            name: "Kristal Avize Premium",
            image: "https://placehold.co/400x400/06b6d4/white?text=Avize+1",
            price: 1250,
            costPrice: 580,
            category: "Avizeler",
            code: "SE-002",
            description: "Lüks kristal detaylı, 8 kollu avize"
        },
        {
            id: 3,
            name: "Dekoratif Masa Lambası",
            image: "https://placehold.co/400x400/0284c7/white?text=Dekor+1",
            price: 320,
            costPrice: 150,
            category: "Dekoratif",
            code: "SE-003",
            description: "Minimalist tasarım, dokunmatik kontrol"
        },
        {
            id: 4,
            name: "LED Spot Aydınlatma Set",
            image: "https://placehold.co/400x400/0891b2/white?text=Spot+1",
            price: 180,
            costPrice: 80,
            category: "Spot & LED",
            code: "SE-004",
            description: "3'lü set, ayarlanabilir açı, sıcak beyaz"
        },
        {
            id: 5,
            name: "Endüstriyel Sarkıt Lamba",
            image: "https://placehold.co/400x400/0369a1/white?text=Sarkit+1",
            price: 520,
            costPrice: 240,
            category: "Lambalar",
            code: "SE-005",
            description: "Retro endüstriyel stil, E27 duy"
        },
        {
            id: 6,
            name: "RGB LED Şerit Aydınlatma",
            image: "https://placehold.co/400x400/22d3ee/white?text=LED+1",
            price: 95,
            costPrice: 40,
            category: "Spot & LED",
            code: "SE-006",
            description: "5 metre, uzaktan kumandalı, 16 renk"
        },
        {
            id: 7,
            name: "Cam Küre Sarkıt Avize",
            image: "https://placehold.co/400x400/0c4a6e/white?text=Avize+2",
            price: 780,
            costPrice: 360,
            category: "Avizeler",
            code: "SE-007",
            description: "Cam küre detaylı, modern sarkıt avize"
        },
        {
            id: 8,
            name: "Duvar Aplik Lambası",
            image: "https://placehold.co/400x400/38bdf8/white?text=Aplik+1",
            price: 210,
            costPrice: 90,
            category: "Dekoratif",
            code: "SE-008",
            description: "İç ve dış mekan uyumlu, su geçirmez"
        },
    ];

    const filteredProducts =
        activeFilter === "Tümü"
            ? products
            : products.filter((p) => p.category === activeFilter);

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