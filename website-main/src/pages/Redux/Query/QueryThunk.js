import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/axios";

const API_URL = "https://alic-website-2-1.onrender.com";
// get all

// create
export const QueryName = createAsyncThunk(
  "query",
  async (CourseNameData, { rejectWithValue }) => {
    try {
      // Transform data to match backend schema
      const response = await axios.post(
        `${API_URL}/query/create`,
        CourseNameData
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
// update
