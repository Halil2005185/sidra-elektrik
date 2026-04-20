import { useEffect, useState, useRef } from "react";
import AdminSiber from "../../../components/AdminSiber/adminSiber";
import axios from "axios";

function AddProduct() {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("");
    const [productCode, setProductCode] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCost, setProductCost] = useState(0);
    const [image, setImage] = useState(null)
    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const fileInputRef = useRef(null)

    async function handleFormSubmit(e) {
        e.preventDefault()
        setError("")
        setSuccess(false)
        setLoading(true)
        try {
            const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
            const token = localStorage.getItem("adminToken");
            const headers = { Authorization: `Bearer ${token}` }

            const checkCode = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/products?filters[productCode][$eq]=${productCode}`
            )

            if (checkCode?.data?.data?.length > 0) {
                setError("Bu ürün kodu zaten kullanılıyor!");
                setLoading(false)
                return;
            }

            const formData = new FormData()
            formData.append("file", image)

            const imgRes = await axios.post(
                `${VITE_BACKEND_URL}/api/admin/upload`,
                formData,
                { headers }
            );

            const imageUrl = imgRes.data.url;
            const imagePublicId = imgRes.data.public_id

            await axios.post(`${VITE_BACKEND_URL}/api/admin/products`, {
                data: {
                    name,
                    productCode,
                    isNew,
                    categories: selectedCategory,
                    imageUrl,
                    imagePublicId,
                    price: productPrice,
                    cost: productCost
                }
            }, { headers })

            setSuccess(true)
            setName("")
            setProductCode("")
            setSelectedCategory("")
            setImage(null)
            setIsNew(false)

        } catch (err) {
            console.log(err);
            setError("Ürün eklenirken bir hata oluştu.");
        } finally {
            setLoading(false)
        }
    }

    function handleImageChange(e) {
        setImage(e.target.files[0])
    }

    function handleCategoryChange(id) {
        setSelectedCategory(id)
    }

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/categories`)
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-[#FFFBF5] font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#2D2418]">Yeni Ürün Ekle</h1>
                    <p className="text-[#8C7B6B] mt-2">Mağazanıza yeni bir ürün tanımlayın.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-[#EDE4D6] p-8 max-w-3xl">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        {error && (
                            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="px-4 py-3 bg-[#E8D5A3]/20 border border-[#C49A3C]/30 rounded-xl text-[#3B2F1E] text-sm font-medium">
                                Ürün başarıyla eklendi! ✅
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#3B2F1E]">Ürün Adı</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Örn: Modern LED Avize" required
                                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#EDE4D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-colors text-[#2D2418] placeholder-[#B8A88A]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#3B2F1E]">Ürün Kodu</label>
                                <input value={productCode} onChange={(e) => setProductCode(e.target.value)} type="text" placeholder="SE-001" required
                                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#EDE4D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-colors text-[#2D2418] placeholder-[#B8A88A]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#3B2F1E]">Satış Fiyatı (₺)</label>
                                <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder="0.00" required
                                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#EDE4D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-colors text-[#2D2418] placeholder-[#B8A88A]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#3B2F1E]">Geliş Fiyatı (₺)</label>
                                <input value={productCost} onChange={(e) => setProductCost(e.target.value)} type="number" placeholder="0.00" required
                                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#EDE4D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-colors text-[#2D2418] placeholder-[#B8A88A]" />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="space-y-3 pt-4 border-t border-[#EDE4D6]">
                            <label className="text-sm font-bold text-[#3B2F1E] block">Kategori</label>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <label key={category.id} className="cursor-pointer">
                                        <input type="radio" name="category" className="peer sr-only" onChange={() => handleCategoryChange(category.id)} />
                                        <div className="px-4 py-2 bg-[#FFFBF5] border border-[#EDE4D6] rounded-lg text-sm font-bold text-[#8C7B6B] peer-checked:bg-[#C49A3C]/10 peer-checked:text-[#C49A3C] peer-checked:border-[#C49A3C] transition-colors">
                                            {category?.name}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* File Upload */}
                        <div className="space-y-2 pt-4 border-t border-[#EDE4D6]">
                            <label className="text-sm font-bold text-[#3B2F1E]">Ürün Fotoğrafı</label>
                            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                            <div onClick={() => fileInputRef.current?.click()}
                                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#EDE4D6] border-dashed rounded-xl hover:border-[#C49A3C] hover:bg-[#FFFBF5] transition-colors cursor-pointer" >
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-[#B8A88A]" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-[#8C7B6B] justify-center">
                                        <span className="relative cursor-pointer bg-transparent rounded-md font-bold text-[#C49A3C] hover:text-[#D4A84B]">
                                            Dosya Yükle
                                        </span>
                                        <p className="pl-1">veya sürükle bırak</p>
                                    </div>
                                    <p className="text-xs text-[#B8A88A]">PNG, JPG, GIF max 5MB</p>
                                    {image && <p className="text-sm text-[#C49A3C] mt-2 font-bold">{image.name}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" disabled={loading}
                                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white font-bold rounded-xl shadow-lg shadow-[#C49A3C]/20 hover:shadow-xl hover:shadow-[#C49A3C]/30 hover:scale-105 transition-all duration-300 disabled:opacity-60">
                                {loading ? "Yükleniyor..." : "Ürünü Kaydet"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddProduct;