import { createSlice } from "@reduxjs/toolkit";
import {
           // fetch all
  QueryName,
     // fetch by id
} from "./QueryThunk"; // Make sure the file name matches

const initialState = {
  queryNames: [],           
  selectedCourse: null,       
  loading: false,
  error: null,
  success: false,
};

const courseSlice = createSlice({
  name: "queryReducer",
  initialState,
  reducers: {
    resetqueryNamestatus: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
   
      .addCase(QueryName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(QueryName.fulfilled, (state, action) => {
        state.loading = false;
        state.queryNames.unshift(action.payload);
        state.success = true;
      })
      .addCase(QueryName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      
     
  },
});

export const { resetqueryNamestatus } = courseSlice.actions;
export default courseSlice.reducer;
