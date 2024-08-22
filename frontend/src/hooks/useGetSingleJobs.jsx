import { JOB_API_END_POINT } from "@/components/utils/constant"
import { setAllJobs, setSingleJob } from "@/redux/jobSlice"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useGetSingleJobs = ({jobId}) => {
    const dispatch = useDispatch();
    
}

export default useGetSingleJobs