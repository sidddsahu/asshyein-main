// redux/subcategorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSubcategories,
  fetchSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  fetchSubcategoriesByCategory,
} from "./subcategoryThunk";

const initialState = {
  subcategories: [],
  subcategoryDetails: null,
  parentCategoryId: null,
  loading: false,
  error: null,
};

const subcategorySlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {
    clearSubcategoryDetails: (state) => {
      state.subcategoryDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get seelected Subcategories
      .addCase(fetchSubcategoriesByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategoriesByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
        state.parentCategoryId = action.payload.category;
      })
      .addCase(fetchSubcategoriesByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get All Subcategories
      .addCase(fetchSubcategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Subcategory by ID
      .addCase(fetchSubcategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategoryDetails = action.payload;
      })
      .addCase(fetchSubcategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Subcategory
      .addCase(createSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories.push(action.payload);
      })
      .addCase(createSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Subcategory
      .addCase(updateSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload.data; // updated list from backend
      })
      .addCase(updateSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Subcategory
      .addCase(deleteSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload.data; // updated list from backend
      })
      .addCase(deleteSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSubcategoryDetails } = subcategorySlice.actions;
export default subcategorySlice.reducer;
