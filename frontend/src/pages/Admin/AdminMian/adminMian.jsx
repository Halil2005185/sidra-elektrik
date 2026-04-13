import AdminSiber from "../../../components/AdminSiber/adminSiber";

function AdminMian() {
    const stats = [
        { title: "Toplam Ürün Sayısı", count: "25", icon: "📦", color: "from-sky-500 to-cyan-400" },
        { title: "Toplam Fatura Sayısı", count: "12", icon: "🧾", color: "from-indigo-500 to-blue-400" },
        { title: "Toplam Kullanıcı", count: "145", icon: "👥", color: "from-emerald-500 to-teal-400" },
        { title: "Alınan Sipariş", count: "89", icon: "🛍️", color: "from-rose-500 to-pink-400" },
    ];

    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                    <p className="text-slate-500 mt-2">Mağaza istatistikleri ve genel bakış.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl text-white mb-4 shadow-sm`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
                            <p className="text-3xl font-bold text-slate-800">{stat.count}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <p className="text-slate-500">Detaylı analiz grafikleri yakında burada görüntülenecek.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminMian;