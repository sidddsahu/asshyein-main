import axios from "axios"
import { base_url } from "../utils/base_url"

// const API = axios.create({ baseURL: "https://qr-scanner-server.onrender.com" })

const API = axios.create({ baseURL: base_url })

// Category and subcategory endpoints
export const fetchcategory = () => API.get("/category")

export const addCategory = (name) => API.post("/category", { name })

export const updateCategory = (id, name) => API.put(`/category/${id}`, { name })
export const deleteCategory = (id) => API.delete(`/category/${id}`)


export const fetchSubcategory = (categoryId) =>
  categoryId ? API.get(`/subcategory?categoryId=${categoryId}`) : API.get("/subcategory");
export const addSubCategory = (data) => API.post("/subcategory", data)
export const updateSubCategory = (id, data) => API.put(`/subcategory/${id}`, data)
export const deleteSubCategory = (id) => API.delete(`/subcategory/${id}`)







export const fetchSubsubcategory = (subcategoryId) =>
  subcategoryId ? API.get(`/subsubcategory?subcategoryId=${subcategoryId}`) : API.get("/subsubcategory");
export const addSubsubCategory = (data) => API.post("/subsubcategory", data)
export const updateSubsubCategory = (id, data) => API.put(`/subsubcategory/${id}`, data)
export const deleteSubsubCategory = (id) => API.delete(`/subsubcategory/${id}`)








