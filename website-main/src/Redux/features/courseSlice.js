// redux/features/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCourses,
  fetchCourseById,
  addCourse,
  deleteCourse,
  fetchFilteredCourses,
} from "./courseThunk";

const initialState = {
  courses: [], // base (all) list
  courseDetails: null, // single course
  filteredCourses: [], // active filtered list
  activeCategoryId: null,
  activeSubcategoryId: null,
  activeSubSubcategoryId: null, // future use
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCourseDetails: (state) => {
      state.courseDetails = null;
    },
    clearFilteredCourses: (state) => {
      state.filteredCourses = [];
    },
    setActiveCategory: (state, action) => {
      state.activeCategoryId = action.payload;
      state.activeSubcategoryId = null;
      state.activeSubSubcategoryId = null;
      state.filteredCourses = []; // जब नई category select हो तो साफ
    },
    setActiveSubcategory: (state, action) => {
      state.activeSubcategoryId = action.payload;
      state.activeSubSubcategoryId = null;
    },
    setActiveSubSubcategory: (state, action) => {
      state.activeSubSubcategoryId = action.payload;
    },
    resetFilters: (state) => {
      state.activeCategoryId = null;
      state.activeSubcategoryId = null;
      state.activeSubSubcategoryId = null;
      state.filteredCourses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // All Courses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        // अगर कोई active filter नहीं है तो filteredCourses reset
        if (!state.activeCategoryId && !state.activeSubcategoryId) {
          state.filteredCourses = [];
        }
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Single Course
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.courseDetails = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter((c) => c._id !== action.payload);
        state.filteredCourses = state.filteredCourses.filter(
          (c) => c._id !== action.payload
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Filtered (category / subCategory)
      .addCase(fetchFilteredCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(fetchFilteredCourses.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.filteredCourses = action.payload.list;
      //   const { category, subCategory, subSubCategory } =
      //     action.payload.filters;
      //   if (category) state.activeCategoryId = category;
      //   if (subCategory !== undefined)
      //     state.activeSubcategoryId = subCategory || null;
      //   if (subSubCategory !== undefined)
      //     state.activeSubSubcategoryId = subSubCategory || null;
      // })
      .addCase(fetchFilteredCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredCourses = Array.isArray(action.payload.list)
          ? action.payload.list
          : [];
        const { category, subCategory, subSubCategory } =
          action.payload.filters;
        if (category) state.activeCategoryId = category;
        if (subCategory !== undefined)
          state.activeSubcategoryId = subCategory || null;
        if (subSubCategory !== undefined)
          state.activeSubSubcategoryId = subSubCategory || null;
      })
      .addCase(fetchFilteredCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.filteredCourses = [];
      });
  },
});

export const {
  clearCourseDetails,
  clearFilteredCourses,
  setActiveCategory,
  setActiveSubcategory,
  setActiveSubSubcategory,
  resetFilters,
} = courseSlice.actions;

export default courseSlice.reducer;
