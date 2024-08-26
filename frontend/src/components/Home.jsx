import Navbar from "./ui/shared/Navbar"
import HeroSection from "./Pages/Home/HeroSection";
import CategoryCarousel from "./Pages/Home/CategoryCarousel";
import LatestJobs from "./Pages/Home/LatestJobs";
import Footer from "./ui/shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    useGetAllJobs();
    const {user}= useSelector(store=>store.auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(user?.role == "recruiter"){
        navigate("/admin/companies")
        }
    },[])
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