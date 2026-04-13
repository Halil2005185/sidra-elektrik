import AdminSiber from "../../../components/AdminSiber/adminSiber";
import CardList from "../../../components/CardList/cardList";

function AllProduct() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-0">
                    <h1 className="text-3xl font-bold text-slate-800">Tüm Ürünler</h1>
                    <p className="text-slate-500 mt-2">Mağazanızdaki tüm ürünleri yönetin.</p>
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <CardList />
                </div>
            </div>
        </section>
    );
}

export default AllProduct;