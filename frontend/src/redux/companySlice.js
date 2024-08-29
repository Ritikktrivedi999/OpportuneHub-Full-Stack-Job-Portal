import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: {},
    companies: [],
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state,action) =>{
      state.companies = action.payload;
    }
  },
});

export default companySlice.reducer;
export const { setSingleCompany,setCompanies } = companySlice.actions;
