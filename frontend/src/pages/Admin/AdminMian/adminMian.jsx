import AdminSiber from "../../../components/AdminSiber/adminSiber";

function AdminMian() {
    const stats = [
        { title: "Toplam Ürün Sayısı", count: "25", icon: "📦", color: "from-[#C49A3C] to-[#D4A84B]" },
        { title: "Toplam Fatura Sayısı", count: "12", icon: "🧾", color: "from-[#B8860B] to-[#C49A3C]" },
        { title: "Toplam Kullanıcı", count: "145", icon: "👥", color: "from-[#D4A84B] to-[#E8D5A3]" },
        { title: "Alınan Sipariş", count: "89", icon: "🛍️", color: "from-[#C49A3C] to-[#B8860B]" },
    ];

    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-[#FFFBF5] font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#2D2418]">Admin Dashboard</h1>
                    <p className="text-[#8C7B6B] mt-2">Mağaza istatistikleri ve genel bakış.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm shadow-[#C49A3C]/5 border border-[#EDE4D6] hover:shadow-md hover:shadow-[#C49A3C]/10 transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl text-white mb-4 shadow-md shadow-[#C49A3C]/20`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-[#8C7B6B] text-sm font-bold uppercase tracking-wider mb-1">{stat.title}</h3>
                            <p className="text-3xl font-extrabold text-[#2D2418]">{stat.count}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-[#EDE4D6] min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#FFF8EE] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#EDE4D6]">
                            <svg className="w-8 h-8 text-[#C49A3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <p className="text-[#8C7B6B] font-medium">Detaylı analiz grafikleri yakında burada görüntülenecek.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminMian;