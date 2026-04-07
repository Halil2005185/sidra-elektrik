import CardList from "../../components/CardList/cardList";
import PageBanner from "../../components/PageBanner/pageBanner";

function SpotlightsLed() {
    return (
        <main className="font-sans">
            <PageBanner
                title="Güçlü ve Verimli"
                highlight="Spot & LED"
                subtitle="Enerji tasarruflu LED spot sistemleri, şerit aydınlatmalar ve gömme armatur çözümleri. Profesyonel mekânlar için."
                breadcrumb="Spot & LED"
                emoji="⚡"
            />
            <CardList />
        </main>
    );
}

export default SpotlightsLed;