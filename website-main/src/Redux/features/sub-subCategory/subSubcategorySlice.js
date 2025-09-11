// redux/subSubcategorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSubSubcategories,
  fetchSubSubcategoryById,
  createSubSubcategory,
  updateSubSubcategory,
  deleteSubSubcategory,
  fetchSubSubcategoriesByParent,
} from "./subSubcategoryThunk";

const initialState = {
  subSubcategories: [],
  subSubcategoryDetails: null,
  loading: false,
  error: null,
};

const subSubcategorySlice = createSlice({
  name: "subSubcategories",
  initialState,
  reducers: {
    clearSubSubcategoryDetails: (state) => {
      state.subSubcategoryDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // ADD THIS (fetch by parent)
      .addCase(fetchSubSubcategoriesByParent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubSubcategoriesByParent.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubcategories = action.payload;
      })
      .addCase(fetchSubSubcategoriesByParent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch All
      .addCase(fetchSubSubcategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubSubcategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubcategories = action.payload;
      })
      .addCase(fetchSubSubcategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch by ID
      .addCase(fetchSubSubcategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubSubcategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubcategoryDetails = action.payload;
      })
      .addCase(fetchSubSubcategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createSubSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubcategories.push(action.payload);
      })
      .addCase(createSubSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateSubSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const index = state.subSubcategories.findIndex(
          (item) => item._id === updated._id
        );
        if (index !== -1) state.subSubcategories[index] = updated;
      })
      .addCase(updateSubSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteSubSubcategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubSubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubcategories = action.payload.data;
      })
      .addCase(deleteSubSubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSubSubcategoryDetails } = subSubcategorySlice.actions;
export default subSubcategorySlice.reducer;
