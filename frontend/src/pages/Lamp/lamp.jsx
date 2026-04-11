import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function Lamp() {
    return (
        <main className="font-sans">
            <PageBanner
                title="Şık ve Modern"
                highlight="Lambalar"
                subtitle="Yaşam alanlarınızı aydınlatacak yüzlerce lamba modelini keşfedin. Masa lambası, sarkıt, aplik ve daha fazlası."
                breadcrumb="Lambalar"
                emoji="💡"
            />
            <CardList categorySlug="lambalar" />
        </main>
    );
}

export default Lamp;