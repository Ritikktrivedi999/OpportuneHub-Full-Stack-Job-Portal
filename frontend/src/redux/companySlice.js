import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: {},
    companies: [],
    searchCompanyByText:"",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state,action) =>{
      state.companies = action.payload;
    },
    setSearchCompanyByText:(state,action) =>{
      state.searchCompanyByText = action.payload;
    }
  },
});

export default companySlice.reducer;
export const { setSingleCompany,setCompanies,setSearchCompanyByText} = companySlice.actions;
