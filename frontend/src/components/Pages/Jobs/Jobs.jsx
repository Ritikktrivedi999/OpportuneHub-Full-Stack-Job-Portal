import Navbar from "@/components/ui/shared/Navbar"
import FilterCard from "./filterCard"
import JobDetails from "./jobDetails"
import { useSelector } from "react-redux"



const Jobs = () => {
    const {allJobs}= useSelector(store=>store.job)

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5">
                < div className="flex gap-5">
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className="grid grid-cols-3  gap-4 md:grid-cols-2 lg:grid-cols" >
                                    {
                                        allJobs.map((job) =><div key={job?._id} >
                                                <JobDetails job={job} />
                                            </div>
                                            )
                                    }


                                </div>
                            </div>
                        )

                    }

                </div>
            </div>
        </div>
    )
}

export default Jobs