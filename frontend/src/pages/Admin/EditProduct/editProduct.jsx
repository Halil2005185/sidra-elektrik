import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AdminSiber from "../../../components/AdminSiber/adminSiber";
import axios from "axios";

function EditProduct() {
    const { documentId } = useParams()
    const [name, setName] = useState("")
    const [productCode, setProductCode] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [productCost, setProductCost] = useState(0)
    const [image, setImage] = useState(null)
    const [currentImage, setCurrentImage] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const fileInputRef = useRef(null)

    // ✅ جيب بيانات المنتج
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/products/${documentId}?populate=*`)
            .then(res => {
                const p = res.data.data
                console.log(p);

                setName(p.name || "")
                setProductCode(p.productCode || "")
                setProductPrice(p.price || 0)
                setProductCost(p.cost || 0)
                setCurrentImage(p.imageUrl || "")
                setSelectedCategory(p.category?.id || "Eror")
            })
            .catch(err => console.log(err))
    }, [documentId])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/categories`)
            .then(res => setCategories(res.data.data))
            .catch(err => console.log(err))
    }, [])

    async function handleFormSubmit(e) {
        e.preventDefault()
        setError("")
        setSuccess(false)
        setLoading(true)

        try {
            const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
            const token = localStorage.getItem("adminToken")
            const headers = { Authorization: `Bearer ${token}` }

            let imageUrl = currentImage
            let imagePublicId = null

            // لو الأدمن اختار صورة جديدة
            if (image) {
                const formData = new FormData()
                formData.append("file", image)
                const imgRes = await axios.post(`${VITE_BACKEND_URL}/api/admin/upload`, formData, { headers })
                imageUrl = imgRes.data.url
                imagePublicId = imgRes.data.public_id
            }

            await axios.put(`${VITE_BACKEND_URL}/api/admin/products/${documentId}`, {
                data: {
                    name,
                    productCode,
                    price: productPrice,
                    cost: productCost,
                    imageUrl,
                    imagePublicId,
                    categories: selectedCategory,
                }
            }, { headers })

            setSuccess(true)
        } catch (err) {
            console.log(err)
            setError("Ürün güncellenirken bir hata oluştu.")
        } finally {
            setLoading(false)
        }
    }

    console.log(name);
    console.log(selectedCategory);

    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Ürünü Düzenle</h1>
                    <p className="text-slate-500 mt-2">Mevcut ürün bilgilerini güncelleyin.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-3xl">
                    <form onSubmit={handleFormSubmit} className="space-y-6">

                        {error && (
                            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
                                Ürün başarıyla güncellendi! ✅
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Ürün Adı</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Ürün Kodu</label>
                                <input
                                    value={productCode}
                                    onChange={(e) => setProductCode(e.target.value)}
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Satış Fiyatı (₺)</label>
                                <input
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                    type="number"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Geliş Fiyatı (₺)</label>
                                <input
                                    value={productCost}
                                    onChange={(e) => setProductCost(e.target.value)}
                                    type="number"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <label className="text-sm font-semibold text-slate-700 block">Kategori</label>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <label key={category.id} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            className="peer sr-only"
                                            checked={selectedCategory === category.id}
                                            onChange={() => setSelectedCategory(category.id)}
                                        />
                                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 peer-checked:bg-sky-50 peer-checked:text-sky-600 peer-checked:border-sky-500 transition-colors">
                                            {category.name}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="space-y-2 pt-4 border-t border-slate-100">
                            <label className="text-sm font-semibold text-slate-700">Ürün Fotoğrafı</label>

                            {/* الصورة الحالية */}
                            {currentImage && !image && (
                                <img src={currentImage} alt="current" className="w-32 h-32 object-cover rounded-xl mb-2" />
                            )}

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="hidden"
                            />
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-sky-400 hover:bg-sky-50/50 transition-colors cursor-pointer"
                            >
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-sm text-slate-600">
                                        {image ? image.name : "Yeni fotoğraf yükle"}
                                    </p>
                                    <p className="text-xs text-slate-500">PNG, JPG max 5MB</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
                            >
                                {loading ? "Güncelleniyor..." : "Değişiklikleri Kaydet"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditProduct