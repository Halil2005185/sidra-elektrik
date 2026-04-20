import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import CardItem from "../../components/CardItem/cardItem"
import Pagination from "../../components/Pagonation/pagination"

function Search() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        async function handle() {
            setLoading(true)
            axios.get(`${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[name][$containsi]=${query}`)
                .then(res => {
                    setProducts(res.data.data)
                    if (res.data.meta?.pagination) {
                        setPageCount(res.data.meta.pagination.pageCount)
                    }
                })
                .catch(err => { console.log(err) })
                .finally(() => setLoading(false))
        }
        handle()
    }, [query])

    if (loading) {
        return (
            <section className="py-16 min-h-screen bg-gradient-to-b from-[#FFFBF5] to-white font-sans">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#EDE4D6] animate-pulse">
                                <div className="aspect-[3/4] bg-[#FFF8EE]" />
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-[#EDE4D6] rounded w-2/3" />
                                    <div className="h-3 bg-[#EDE4D6] rounded w-1/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-16 bg-gradient-to-b from-[#FFFBF5] via-white to-[#FFFBF5] font-sans min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold text-[#2D2418]">
                        "<span className="text-[#C49A3C]">{query}</span>" için sonuçlar
                    </h2>
                    <p className="text-sm text-[#8C7B6B] mt-2">{products.length} ürün bulundu</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products?.length > 0
                        ? products.map(product => (
                            <CardItem key={product.id} product={product} />
                        ))
                        : <div className="col-span-full text-center py-20">
                            <span className="text-6xl mb-4 block">🔍</span>
                            <p className="text-[#8C7B6B] text-lg font-medium">Sonuç bulunamadı</p>
                            <p className="text-[#B8A88A] text-sm mt-1">Farklı anahtar kelimeler deneyin</p>
                        </div>
                    }
                </div>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} pageCount={pageCount} />
        </section>
    )
}
export default Search