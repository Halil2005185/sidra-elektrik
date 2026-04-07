import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function Decorative() {
    return (
        <main className="font-sans">
            <PageBanner
                title="Estetik ve Yaratıcı"
                highlight="Dekoratif Aydınlatma"
                subtitle="Mekânınıza karakter ve atmosfer katacak özel dekoratif aydınlatma ürünleri. Minimalist'ten bohem'e her tarz."
                breadcrumb="Dekoratif"
                emoji="✨"
            />
            <CardList />
        </main>
    );
}

export default Decorative;