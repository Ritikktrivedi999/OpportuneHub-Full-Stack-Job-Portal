import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { setSearchedQuery } from "@/redux/jobSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const category = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Non-Tech Jobs",
    "Core Engineering Jobs"
]

const CategoryCarousel = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
}

    return (
        <>
            <div>
                <Carousel className="w-full max-w-xl mx-auto my-20">
                    <CarouselContent>
                        {

                            category.map((cat, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                                    <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default CategoryCarousel