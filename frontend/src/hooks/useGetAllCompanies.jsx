import { COMPANY_API_END_POINT } from "@/components/utils/constant";
import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        } else {
          console.error("Failed to fetch company");
        }
      } catch (error) {
        console.log(error);

      }
    };
    
     fetchCompanies();
  }, []);
};

export default useGetCompanyById;
