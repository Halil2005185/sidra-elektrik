import AdminSiber from "../../../components/AdminSiber/adminSiber";

const faturalar = [
    { id: 1, code: "INV-001", name: "Halil İsmail", price: 1500, status: "Ödendi", date: "12 Ekim 2023" },
    { id: 2, code: "INV-002", name: "Ahmet Yılmaz", price: 3200, status: "Bekliyor", date: "14 Ekim 2023" },
    { id: 3, code: "INV-003", name: "Ayşe Kaya", price: 850, status: "Ödendi", date: "15 Ekim 2023" },
];

function Invoice() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-[#FFFBF5] font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#2D2418]">Faturalar</h1>
                    <p className="text-[#8C7B6B] mt-2">Müşteri faturalarını ve ödeme durumlarını takip edin.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-[#EDE4D6] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FFFBF5] border-b border-[#EDE4D6]">
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider">Fatura Kodu</th>
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider">Müşteri</th>
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider">Tarih</th>
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider">Tutar</th>
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider">Durum</th>
                                    <th className="py-4 px-6 text-sm font-bold text-[#8C7B6B] uppercase tracking-wider text-right">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#EDE4D6]">
                                {faturalar.map((fatura) => (
                                    <tr key={fatura.id} className="hover:bg-[#FFF8EE] transition-colors">
                                        <td className="py-4 px-6 text-sm font-bold text-[#2D2418]">{fatura.code}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-[#3B2F1E]">{fatura.name}</td>
                                        <td className="py-4 px-6 text-sm text-[#8C7B6B]">{fatura.date}</td>
                                        <td className="py-4 px-6 text-sm font-bold text-[#C49A3C]">{fatura.price} ₺</td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                                ${fatura.status === 'Ödendi'
                                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                                    : 'bg-amber-50 text-amber-600 border border-amber-200'
                                                }`}>
                                                {fatura.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-[#C49A3C] hover:text-[#B8860B] text-sm font-bold transition-colors">Detay</button>
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