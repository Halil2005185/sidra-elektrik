import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirming, setConfirming] = useState(false);
    const [tab, setTab] = useState("cart");

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(items);
        fetchOrders();
    }, []);

    async function fetchOrders() {
        try {
            const userToken = localStorage.getItem("usertoken");
            if (!userToken) return;
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            setOrders(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    function removeFromCart(productCode) {
        const updated = cart.filter(item => item.productCode !== productCode);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
    }

    async function confirmOrder() {
        const userToken = localStorage.getItem("usertoken");
        if (!userToken) { alert("Please login first!"); return; }
        if (cart.length === 0) { alert("Sepetiniz boş!"); return; }

        setConfirming(true);
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
                {
                    data: {
                        groupId: `order-${Date.now()}`,
                        total: grandTotal,
                        itemsList: cart.map(item => ({
                            productId: item.productId,
                            productName: item.productName,
                            productCode: item.productCode,
                            imageUrl: item.imageUrl,
                            price: item.price,
                            cost: item.cost,
                            quantity: item.quantity,
                            total: item.total,
                        })),
                    }
                },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            localStorage.removeItem("cart");
            window.dispatchEvent(new Event("storage"));
            setCart([]);
            await fetchOrders();
            setTab("orders");
            alert("Siparişiniz onaylandı! ✅");
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        } finally {
            setConfirming(false);
        }
    }

    async function handleDeleteOrder(documentId) {
        const userToken = localStorage.getItem("usertoken");
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${documentId}`,
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            await fetchOrders();
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        }
    }

    async function handleEditQuantity(order, newQuantity) {
        if (newQuantity < 1) return;
        const userToken = localStorage.getItem("usertoken");
        try {
            await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${order.documentId}`,
                { data: { quantity: newQuantity, total: order.price * newQuantity } },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            await fetchOrders();
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        }
    }

    const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFFBF5] to-[#FFF3E0] p-6 font-sans">
            <div className="max-w-3xl mx-auto">

                {/* Tabs */}
                <div className="flex gap-2 mb-6 bg-white rounded-2xl p-1 shadow-sm border border-[#EDE4D6]">
                    <button
                        onClick={() => setTab("cart")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2
                            ${tab === "cart"
                                ? "bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white shadow-md shadow-[#C49A3C]/20"
                                : "text-[#8C7B6B] hover:text-[#C49A3C]"
                            }`}
                    >
                        🛒 Sepetim
                        {cart.length > 0 && (
                            <span className={`text-xs rounded-full px-2 py-0.5 ${tab === "cart" ? "bg-white/30 text-white" : "bg-[#C49A3C]/10 text-[#C49A3C]"}`}>
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setTab("orders")}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2
                            ${tab === "orders"
                                ? "bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] text-white shadow-md shadow-[#C49A3C]/20"
                                : "text-[#8C7B6B] hover:text-[#C49A3C]"
                            }`}
                    >
                        📦 Siparişlerim
                        {orders.length > 0 && (
                            <span className={`text-xs rounded-full px-2 py-0.5 ${tab === "orders" ? "bg-white/30 text-white" : "bg-[#C49A3C]/10 text-[#C49A3C]"}`}>
                                {orders.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Cart Tab */}
                {tab === "cart" && (
                    <>
                        {cart.length === 0 ? (
                            <div className="text-center py-20 text-[#B8A88A]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-[#EDE4D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.868l1.96-8.595A1.125 1.125 0 0020.023 3H5.625" />
                                </svg>
                                <p className="text-lg font-medium text-[#3B2F1E]">Sepetiniz boş</p>
                                <p className="text-sm mt-1">Ürün eklemek için anasayfaya gidin</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    {cart.map(item => (
                                        <div key={item.productCode} className="bg-white rounded-2xl p-5 shadow-sm border border-[#EDE4D6] flex items-center gap-4 hover:shadow-md hover:border-[#C49A3C]/20 transition-all duration-300">
                                            <img src={item.imageUrl} alt={item.productName} className="w-16 h-16 object-cover rounded-xl border border-[#EDE4D6]" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-[#2D2418]">{item.productName}</p>
                                                <p className="text-xs text-[#B8A88A] font-mono">#{item.productCode}</p>
                                                <p className="text-sm text-[#8C7B6B] mt-1">
                                                    {item.quantity} × {item.price} ₺ =
                                                    <span className="font-bold text-[#C49A3C]"> {item.total} ₺</span>
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.productCode)}
                                                className="text-rose-400 hover:text-rose-600 hover:bg-rose-50 w-8 h-8 rounded-full flex items-center justify-center transition-all text-lg font-bold"
                                            >✕</button>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EDE4D6]">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-semibold text-[#3B2F1E]">Toplam</span>
                                        <span className="text-xl font-bold text-emerald-600">{grandTotal.toFixed(2)} ₺</span>
                                    </div>
                                    <button
                                        onClick={confirmOrder}
                                        disabled={confirming}
                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                                    >
                                        {confirming ? (
                                            <>
                                                <div className="animate-spin w-4 h-4 rounded-full border-2 border-white/30 border-t-white" />
                                                İşleniyor...
                                            </>
                                        ) : "✓ Siparişi Onayla"}
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                )}

                {/* Orders Tab */}
                {tab === "orders" && (
                    <>
                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="animate-spin w-10 h-10 rounded-full border-4 border-[#EDE4D6] border-t-[#C49A3C]" />
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="text-center py-20 text-[#B8A88A]">
                                <p className="text-lg font-medium text-[#3B2F1E]">Henüz sipariş yok</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {orders.map((order, index) => (
                                    <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-[#EDE4D6] p-5 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-semibold text-[#8C7B6B]">🧾 Sipariş #{index + 1}</span>
                                            <span className="text-sm font-bold text-emerald-600">
                                                Toplam: {order.total} ₺
                                            </span>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-[#EDE4D6] to-transparent mb-3" />

                                        <div className="space-y-3">
                                            {order.itemsList?.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-[#FFFBF5] rounded-xl border border-[#EDE4D6]">
                                                    <img src={item.imageUrl} alt={item.productName} className="w-12 h-12 object-cover rounded-lg" />
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-[#2D2418] text-sm">{item.productName}</p>
                                                        <p className="text-xs text-[#B8A88A]">#{item.productCode}</p>
                                                        <p className="text-xs text-[#8C7B6B] mt-0.5">
                                                            {item.quantity} × {item.price} ₺ =
                                                            <span className="font-bold text-[#C49A3C]"> {item.total} ₺</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleDeleteOrder(order.documentId)}
                                            className="mt-3 w-full py-2 rounded-xl bg-rose-50 text-rose-500 border border-rose-200 hover:bg-rose-100 transition-all text-sm font-semibold"
                                        >
                                            🗑 Siparişi İptal Et
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MyOrders;