import { COMPANY_API_END_POINT } from "@/components/utils/constant";
import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {
          withCredentials: true,
        });
        console.log(res.data.company)
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        } else {
          console.error("Failed to fetch company");
        }
      } catch (error) {
        console.log(error);

      }
    };
    
     fetchSingleCompany();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
