import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { JOB_API_END_POINT } from "@/components/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const JobDescription = () => {
    const isApplied = true;
    const dispatch = useDispatch();
    const {singleJob}=  useSelector(store=>store.job)
    const {user}= useSelector(store=>store.auth)
    //get single job using custom hook
    const params = useParams();
    const jobId = params.id;



    useEffect(()=>{
        const fetchSingleJobs = async()=>{
           try {
             const  res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
             console.log(res);
             if(res.data.success){
             dispatch(setSingleJob(res.data.job))
             }
           } catch (error){
               console.error(error);
           }
        }
        fetchSingleJobs();
   },[jobId,dispatch, user?._id]); 
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>

            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>{singleJob?.description}</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.position}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>createdDate</span></h1>
            </div>
        </div>
    )
}

export default JobDescription