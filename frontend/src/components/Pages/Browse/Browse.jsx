
import Navbar from '@/components/ui/shared/Navbar';
import JobDetails from '../Jobs/jobDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs, set } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [dispatch,allJobs]);

    if (!Array.isArray(allJobs)) {
        console.error("allJobs is not an array");
        return <div>Error: Jobs data is not available</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.length === 0 ? <span>No jobs found</span> : (
                            allJobs.map((job) => (
                                <JobDetails key={job._id} job={job} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};


export default Browse;
