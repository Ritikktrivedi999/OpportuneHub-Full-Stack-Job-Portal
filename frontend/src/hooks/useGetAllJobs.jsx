import { JOB_API_END_POINT } from '@/components/utils/constant';
import { setAllJobs } from '@/redux/jobSlice';

import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery} = useSelector(store => store.job);


    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const { data } = await axios.get(`${JOB_API_END_POINT}/get`, { params: { keyword: searchedQuery }, withCredentials: true });
                if (data.success) {
                    dispatch(setAllJobs(data.jobs));
                } else {
                    console.error('Failed to fetch jobs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchAllJobs();
    }, [dispatch, searchedQuery]);
};

export default useGetAllJobs;
