import { Button } from "@/components/ui/button"
import { setSearchedQuery } from "@/redux/jobSlice";
import { Search } from "lucide-react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }


    return (
        <div className="text-center">
            <div className="flex flex-col gap-5 my-10">
                <span className="px-4 py-2 mx-auto rounded-full bg-gray-100 text-[#F83002] font-medium">Top Job Hunt Website</span>
                <h1 className="text-5xl font-bold">Search, Apply & <br />Get Your <span className="text-[#6A38C2]">Dream Jobs</span></h1>
                <p className="text-[#08060b]"> Unlock Your Potential, Connect with Opportunities, and Build a Brighter Future
                </p>
                <div className='flex w-[40%] h-10 shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e)=> setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection