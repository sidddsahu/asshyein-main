import { configureStore } from "@reduxjs/toolkit";
import leadSourceReducer from "./CourseSlice";
import queryReducer from "./Query/QuerySlice";
import courseReducer from "../../Redux/features/courseSlice";
import categoryReducer from "../../Redux/features/category/categorySlice";
import subcategoryReducer from "../../Redux/features/subCategory/subcategorySlice";
import subSubcategoryReducer from "../../Redux/features/sub-subCategory/subSubcategorySlice";

import routesReducer from "../../Redux/features/routes/routesSlice";
import seoReducer from "../../Redux/features/seo/seoSlice";
import blogSeoReducer from "../../Redux/features/blogSeo/blogSeoSlice";

export const store = configureStore({
  reducer: {
    leadsource: leadSourceReducer,
    querysourse: queryReducer,
    courses: courseReducer,
    categories: categoryReducer,
    subcategories: subcategoryReducer,
    subSubcategories: subSubcategoryReducer,

    routes: routesReducer,
    seo: seoReducer,
    blogSeo: blogSeoReducer,
  },
});
