import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CardItem({ product, index, onDelete }) {
    // const [isHovered, setIsHovered] = useState(false);
    const { pathname } = useLocation()
    async function handleDeleteClick() {
        if (!deleteConfirm) {
            setDeleteConfirm(true)
            setTimeout(() => setDeleteConfirm(false), 3000)
            return
        }
        setIsDeleting(true)
        try {
            const token = localStorage.getItem("adminToken")
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${product.documentId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setIsDeleted(true)
            setTimeout(() => onDelete(product.id), 500)
        } catch (err) {
            console.log(err)
            setIsDeleting(false)
            setDeleteConfirm(false)
        }
    }

    const token = localStorage.getItem("adminToken")
    const [isFavorited, setIsFavorited] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
        return favorites.includes(product?.id)
    });

    // Delete states
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    // Cart dropdown state
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const cartRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setIsCartOpen(false);
            }
        }
        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isCartOpen]);

    const handleFavorite = (e) => {
        e.stopPropagation()
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

        if (isFavorited) {
            const updated = favorites.filter(id => id !== product.id)
            localStorage.setItem("favorites", JSON.stringify(updated))
        } else {
            favorites.push(product.id)
            localStorage.setItem("favorites", JSON.stringify(favorites))
        }

        setIsFavorited(!isFavorited)
        window.dispatchEvent(new Event("storage"))

    }
    function handleAddToCart(e) {
        e.preventDefault();

        const userToken = localStorage.getItem("usertoken");
        if (!userToken) {
            alert("Please login first!");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItem = cart.find(item => item.productCode === product.productCode);

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.total = existingItem.price * existingItem.quantity;
        } else {
            cart.push({
                price: product.price,
                cost: product.cost,
                quantity: quantity,
                total: product.price * quantity,
                productCode: product.productCode,
                productId: product.documentId,
                productName: product.name,
                imageUrl: product.imageUrl,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storage"));

        alert("Sepete eklendi! ✅");
        setIsCartOpen(false);
        setQuantity(1);
    }
    // async function handleDeleteClick() {
    //     if (!deleteConfirm) {
    //         setDeleteConfirm(true);
    //         // Auto-cancel confirmation after 3 seconds
    //         setTimeout(() => setDeleteConfirm(false), 3000);
    //         return;
    //     }

    //     setIsDeleting(true);
    //     try {
    //         const token = localStorage.getItem("adminToken")
    //         await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/products/${product.documentId}`, { headers: { Authorization: `Bearer ${token}` } })
    //         setIsDeleting(false);
    //         setIsDeleted(true);
    //     } catch (err) {
    //         console.log(err);
    //         setIsDeleting(false);
    //         setDeleteConfirm(false);
    //     }
    // }

    // If deleted, render a fade-out card
    if (isDeleted) {
        return (
            <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-500 ease-in-out opacity-0 scale-95 max-h-0"
                style={{
                    animation: "cardDeleteFadeOut 0.5s ease-in-out forwards",
                }}
            >
                <style>{`
                    @keyframes cardDeleteFadeOut {
                        0% { opacity: 1; transform: scale(1); max-height: 600px; margin-bottom: 0; }
                        50% { opacity: 0; transform: scale(0.9); max-height: 600px; }
                        100% { opacity: 0; transform: scale(0.8); max-height: 0; margin-bottom: 0; padding: 0; border-width: 0; }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-500 border border-slate-100 hover:border-sky-200"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            {/* Deleting overlay */}
            {isDeleting && (
                <div className="absolute inset-0 z-30 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 rounded-2xl" style={{ animation: "deletingOverlayIn 0.3s ease-out" }}>
                    <style>{`
                        @keyframes deletingOverlayIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes deleteSpinner {
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
                    <div
                        className="w-10 h-10 rounded-full border-[3px] border-rose-200 border-t-rose-500"
                        style={{ animation: "deleteSpinner 0.8s linear infinite" }}
                    />
                    <span className="text-sm font-semibold text-rose-500 tracking-wide">Siliniyor...</span>
                </div>
            )}

            <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full shadow-lg shadow-sky-500/25">
                    {product.category?.name}
                </span>

                {/* ✅ زر المفضلة */}
                <button
                    onClick={handleFavorite}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isFavorited
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                        : "bg-white/80 text-slate-400 hover:bg-white hover:text-rose-500 shadow-sm"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill={isFavorited ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>


            </div>

            <div className="p-4 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    {product.productCode}
                </span>

                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2 leading-snug">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-xs text-slate-400 line-clamp-1">
                        {product.description}
                    </p>
                )}

                <div className="flex justify-between items-end gap-2 px-1 pt-1">
                    <span className="text-lg font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                        <span>Fiyat :</span>  {product.price} ₺
                    </span>
                    {token && (
                        <span className="text-lg font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                            <span>Maliyet :</span>   {product.cost} ₺
                        </span>
                    )}
                </div>
                <div className="flex items-center justify-between px-2">
                    {token &&
                        <Link to={`/admin/admin-edit-product/${product.documentId}`}>
                            <div className="my-2 rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/25 w-fit px-4 py-1 cursor-pointer">Edit</div>
                        </Link>
                    }
                    {pathname == "/admin/admin-allProduct" && (
                        <button
                            onClick={handleDeleteClick}
                            disabled={isDeleting}
                            className={`group/del relative my-2 flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 overflow-hidden
                                ${deleteConfirm
                                    ? "bg-gradient-to-r from-rose-600 to-red-500 text-white shadow-lg shadow-rose-500/30 scale-105"
                                    : "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 hover:shadow-md hover:shadow-rose-500/10"
                                }
                                disabled:opacity-60 disabled:cursor-not-allowed
                            `}
                        >
                            {/* Shimmer on confirm state */}
                            {deleteConfirm && (
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                            )}
                            <style>{`
                                @keyframes shimmer {
                                    100% { transform: translateX(100%); }
                                }
                            `}</style>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-3.5 w-3.5 relative transition-transform duration-300 ${deleteConfirm ? "animate-[trashShake_0.5s_ease-in-out]" : "group-hover/del:scale-110"}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            <style>{`
                                @keyframes trashShake {
                                    0%, 100% { transform: rotate(0deg); }
                                    20% { transform: rotate(-12deg); }
                                    40% { transform: rotate(12deg); }
                                    60% { transform: rotate(-8deg); }
                                    80% { transform: rotate(8deg); }
                                }
                            `}</style>

                            <span className="relative">
                                {deleteConfirm ? "Emin misin?" : "Sil"}
                            </span>
                        </button>
                    )}
                </div>

                <div ref={cartRef} className="relative pt-1">
                    <button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300
                            ${isCartOpen
                                ? "bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/30 scale-[1.02]"
                                : "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98]"
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span>Sepete Ekle</span>
                        {/* Chevron */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform duration-300 ${isCartOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <div
                        className={`absolute left-0 right-0 top-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${isCartOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 pointer-events-none"}`}
                    >
                        <form
                            onSubmit={handleAddToCart}
                            className="bg-gradient-to-br from-slate-50 to-sky-50/50 border border-sky-100 rounded-xl p-4 space-y-3 shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Ürün Fiyatı</span>
                                <span className="text-sm font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                                    {product.price} ₺
                                </span>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

                            <div className="flex items-center justify-between gap-3">
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Ürün Sayısı</span>
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 transition-all duration-200 text-sm font-bold shadow-sm active:scale-90"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-14 h-8 text-center text-sm font-semibold text-slate-700 bg-white border border-sky-200 rounded-lg outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 transition-all duration-200 text-sm font-bold shadow-sm active:scale-90"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between bg-white/80 rounded-lg px-3 py-2 border border-sky-100">
                                <span className="text-xs font-medium text-slate-500">Toplam</span>
                                <span className="text-base font-extrabold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                                    {(product.price * quantity).toFixed(2)} ₺
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white text-sm font-semibold tracking-wide shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Ekle
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;