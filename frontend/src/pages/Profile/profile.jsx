import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileImage from "/images/TonyStark.webp";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData) {
            navigate("/login");
            return;
        }
        setUser(userData);
        setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
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
            setOrders(res.data.data || []);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    function handleLogout() {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
        navigate("/");
    }

    const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const totalItems = orders.reduce((sum, order) => {
        const items = order.itemsList || [];
        return sum + items.reduce((s, item) => s + (item.quantity || 0), 0);
    }, 0);

    const memberSince = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })
        : "—";

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFFBF5] via-white to-[#FFF3E0] font-sans">
            {/* Hero Banner */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B2F1E] via-[#4A3A28] to-[#3B2F1E]" />
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C49A3C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 pt-12 pb-24 text-center">
                    {/* Avatar */}
                    <div className="relative inline-block mb-4">
                        <div className="w-28 h-28 rounded-full ring-4 ring-[#C49A3C]/30 shadow-2xl overflow-hidden mx-auto bg-[#FFF8EE]"
                            style={{ animation: "profileFadeIn 0.6s ease-out" }}>
                            <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] rounded-full border-4 border-[#3B2F1E] flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ animation: "profileFadeIn 0.6s ease-out 0.1s both" }}>
                        {user.username}
                    </h1>
                    <p className="text-[#D4C5A9] text-sm font-medium" style={{ animation: "profileFadeIn 0.6s ease-out 0.2s both" }}>
                        {user.email}
                    </p>
                    <p className="text-[#A89880] text-xs mt-1" style={{ animation: "profileFadeIn 0.6s ease-out 0.25s both" }}>
                        Üye olma tarihi: {memberSince}
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="max-w-4xl mx-auto px-4 -mt-12" style={{ animation: "profileSlideUp 0.5s ease-out 0.3s both" }}>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[
                        {
                            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
                            label: "Siparişler",
                            value: orders.length,
                        },
                        {
                            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
                            label: "Favoriler",
                            value: favorites.length,
                        },
                        {
                            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />,
                            label: "Toplam Ürün",
                            value: totalItems,
                        },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 md:p-5 shadow-lg shadow-[#C49A3C]/5 border border-[#EDE4D6] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#C49A3C]/10">
                            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#C49A3C] to-[#D4A84B] text-white mb-2 shadow-md shadow-[#C49A3C]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>{stat.icon}</svg>
                            </div>
                            <p className="text-2xl md:text-3xl font-extrabold text-[#2D2418]">
                                {loading ? "—" : stat.value}
                            </p>
                            <p className="text-[10px] md:text-xs font-bold text-[#8C7B6B] uppercase tracking-wider mt-0.5">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8 space-y-5" style={{ animation: "profileSlideUp 0.5s ease-out 0.4s both" }}>

                {/* Total Spent Banner */}
                <div className="bg-gradient-to-r from-[#C49A3C] to-[#E8D5A3] rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-[#C49A3C]/20 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#3B2F1E]/80">Toplam Harcama</p>
                        <p className="text-3xl md:text-4xl font-extrabold mt-1 text-[#2D2418]">
                            {loading ? "—" : `${totalSpent.toLocaleString("tr-TR")} ₺`}
                        </p>
                    </div>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2D2418]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8 text-[#2D2418]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#EDE4D6] overflow-hidden hover:border-[#C49A3C]/30 transition-all duration-300">
                    <div className="px-5 py-4 border-b border-[#EDE4D6] bg-[#FFFBF5]">
                        <h2 className="text-sm font-bold text-[#3B2F1E] uppercase tracking-wider">Hızlı Erişim</h2>
                    </div>
                    {[
                        { to: "/myOrders", icon: "🛒", label: "Sepetim & Siparişlerim", desc: "Siparişlerini görüntüle ve yönet" },
                        { to: "/favori", icon: "❤️", label: "Favorilerim", desc: "Beğendiğin ürünlere göz at" },
                        { to: "/", icon: "🏠", label: "Ana Sayfa", desc: "Tüm ürünleri keşfet" },
                        { to: "/contact", icon: "📞", label: "İletişim", desc: "Bize ulaşın" },
                    ].map((link, i) => (
                        <Link key={i} to={link.to} className="flex items-center gap-4 px-5 py-4 hover:bg-[#FFF8EE] transition-all duration-200 group border-b border-[#EDE4D6] last:border-b-0">
                            <span className="text-2xl opacity-80 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all">{link.icon}</span>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-[#2D2418] group-hover:text-[#C49A3C] transition-colors">{link.label}</p>
                                <p className="text-xs text-[#8C7B6B] mt-0.5">{link.desc}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#B8A88A] group-hover:text-[#C49A3C] group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    ))}
                </div>

                {/* Account Info */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#EDE4D6] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#EDE4D6] bg-[#FFFBF5]">
                        <h2 className="text-sm font-bold text-[#3B2F1E] uppercase tracking-wider">Hesap Bilgileri</h2>
                    </div>
                    <div className="divide-y divide-[#EDE4D6]">
                        {[{ label: "Kullanıcı Adı", value: user.username }, { label: "E-posta", value: user.email }, { label: "Üyelik Tarihi", value: memberSince }].map((info, i) => (
                            <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-[#FFFBF5] transition-colors">
                                <span className="text-xs font-bold text-[#8C7B6B] uppercase tracking-wider">{info.label}</span>
                                <span className="text-sm font-semibold text-[#2D2418]">{info.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logout Button */}
                <div className="pt-2 pb-8">
                    {!showLogoutConfirm ? (
                        <button onClick={() => setShowLogoutConfirm(true)}
                            className="w-full py-3.5 rounded-xl bg-white text-rose-500 border border-rose-200 font-bold text-sm hover:bg-rose-50 hover:border-rose-300 hover:shadow-md hover:shadow-rose-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                            Çıkış Yap
                        </button>
                    ) : (
                        <div className="flex gap-3" style={{ animation: "profileFadeIn 0.2s ease-out" }}>
                            <button onClick={() => setShowLogoutConfirm(false)}
                                className="flex-1 py-3.5 rounded-xl bg-[#FFFBF5] text-[#3B2F1E] border border-[#EDE4D6] font-bold text-sm hover:bg-[#FFF8EE] transition-all duration-300">
                                İptal
                            </button>
                            <button onClick={handleLogout}
                                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold text-sm shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                                Evet, Çıkış Yap
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes profileFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes profileSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
}

export default Profile;
