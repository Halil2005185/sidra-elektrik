import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function Chandelier() {
    return (
        <main className="font-sans">
            <PageBanner
                title="Lüks ve Zarif"
                highlight="Avizeler"
                subtitle="Salonunuza ihtişam katacak kristal, modern ve klasik avize modellerini keşfedin. Her mekâna uygun tasarımlar."
                breadcrumb="Avizeler"
                emoji="🕯️"
            />
            <CardList />
        </main>
    );
}

export default Chandelier;