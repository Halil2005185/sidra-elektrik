import AdminSiber from "../../../components/AdminSiber/adminSiber";

const faturalar = [
    { id: 1, code: "INV-001", name: "Halil İsmail", price: 1500, status: "Ödendi", date: "12 Ekim 2023" },
    { id: 2, code: "INV-002", name: "Ahmet Yılmaz", price: 3200, status: "Bekliyor", date: "14 Ekim 2023" },
    { id: 3, code: "INV-003", name: "Ayşe Kaya", price: 850, status: "Ödendi", date: "15 Ekim 2023" },
];

function Invoice() {
    return (
        <section className="flex min-h-screen bg-slate-50 font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Faturalar</h1>
                    <p className="text-slate-500 mt-2">Müşteri faturalarını ve ödeme durumlarını takip edin.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600">Fatura Kodu</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600">Müşteri</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600">Tarih</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600">Tutar</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600">Durum</th>
                                    <th className="py-4 px-6 text-sm font-semibold text-slate-600 text-right">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {faturalar.map((fatura) => (
                                    <tr key={fatura.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4 px-6 text-sm font-medium text-slate-800">{fatura.code}</td>
                                        <td className="py-4 px-6 text-sm text-slate-600">{fatura.name}</td>
                                        <td className="py-4 px-6 text-sm text-slate-500">{fatura.date}</td>
                                        <td className="py-4 px-6 text-sm font-semibold text-slate-700">{fatura.price} ₺</td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${fatura.status === 'Ödendi' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                                {fatura.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-sky-500 hover:text-sky-600 text-sm font-medium transition-colors">Detay</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invoice;