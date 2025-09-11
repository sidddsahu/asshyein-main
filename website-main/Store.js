import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer from "../../Client/src/Redux/EnquirySlice";

const store = configureStore({
  reducer: {
    enquiry: enquiryReducer,
  },
});

export default store;
