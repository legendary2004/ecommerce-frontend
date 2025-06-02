import Page from "../classes/Page"
import BottomSearch from "../components/section/home/BottomSearch"
import HomeHero from "../components/section/home/HomeHero"
import NewArrivals from "../components/section/home/NewArrivals"
import OfferCTA from "../components/section/home/OfferCTA"
import ShopByCategories from "../components/section/home/ShopByCategories"
import Testimonials from "../components/section/home/Testimonials"

const Home = () => {
    return (
        <Page>
            <HomeHero />
            <NewArrivals />
            <ShopByCategories />
            <OfferCTA />
            <Testimonials />
            <BottomSearch />
        </Page>
    )
}

export default Home