import "./Home.css";

import IntroSection from "./components/IntroSection";
import ProductionSection from "./components/ProductionSection";
import ProductsSection from "./components/ProductsSection";
import FeaturedSection from "./components/FeaturedSection";
import PromoSection from "./components/PromoSection";
import WhyChooseUs from "./components/WhyChooseUs";
import StatsBar from "./components/StatsBar";
import DealsSection from "./components/DealsSection";
import PromoTableSection from "./components/PromoTableSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsSection from "./components/NewsSection";

function Home() {
return (
<main className="home">
<IntroSection />
<ProductionSection />
<ProductsSection />
<FeaturedSection />
<PromoSection />
<WhyChooseUs />
<StatsBar />
<DealsSection />
<PromoTableSection />
<TestimonialSection />
<NewsSection />
</main>
);
}

export default Home;