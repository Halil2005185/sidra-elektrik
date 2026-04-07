import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function Accessory() {
    return (
        <main className="font-sans">
            <PageBanner
                title="Her Aydınlatmaya Uygun"
                highlight="Aksesuarlar"
                subtitle="Duy, kablo, ampul, adaptör ve daha fazlası. Aydınlatma sisteminizi tamamlayacak tüm aksesuar ürünleri burada."
                breadcrumb="Aksesuarlar"
                emoji="🔧"
            />
            <CardList />
        </main>
    );
}

export default Accessory;