import Navbar from "./ui/shared/Navbar"
import HeroSection from "./Pages/Home/HeroSection";
import CategoryCarousel from "./Pages/Home/CategoryCarousel";
import LatestJobs from "./Pages/Home/LatestJobs";
import Footer from "./ui/shared/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCarousel/>
            <LatestJobs/>
            <Footer/>
        </div>
    )
}

export default Home;