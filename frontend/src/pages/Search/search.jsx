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
                }

                )
                .catch(err => {
                    console.log(err)
                }).finally(() => setLoading(false))
        }
        handle()
    }, [query])

    if (loading) {
        return (
            <section className="py-16 min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
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
        <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >

                <h2 className="text-2xl font-bold text-center py-10">
                    "{query}" için sonuçlar
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products?.length > 0
                        ? products.map(product => (
                            <CardItem key={product.id} product={product} />
                        ))
                        : <p>Sonuç bulunamadı</p>
                    }
                </div>
            </div>
            <Pagination currentPage={currentPage}
                setCurrentPage={handlePageChange}
                pageCount={pageCount} />
        </section>
    )
}
export default Search