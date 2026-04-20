import AdminSiber from "../../../components/AdminSiber/adminSiber";
import CardList from "../../../components/CardList/cardList";

function AllProduct() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-[#FFFBF5] font-sans">
            <AdminSiber />
            <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div className="mb-0">
                    <h1 className="text-3xl font-bold text-[#2D2418]">Tüm Ürünler</h1>
                    <p className="text-[#8C7B6B] mt-2">Mağazanızdaki tüm ürünleri yönetin.</p>
                </div>
                <div className="rounded-2xl overflow-hidden mt-6 bg-white border border-[#EDE4D6] shadow-sm shadow-[#C49A3C]/5">
                    <CardList />
                </div>
            </div>
        </section>
    );
}

export default AllProduct;