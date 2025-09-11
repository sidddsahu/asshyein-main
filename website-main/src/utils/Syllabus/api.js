import axios from "axios"
import { base_url } from "../../pages/utils/base_url"

// const API = axios.create({ baseURL: "https://qr-scanner-server.onrender.com" })

const API = axios.create({ baseURL: base_url })

// Category and subcategory endpoints
export const fetchcategory = () => API.get("/syllabuscategory")

export const addCategory = (name) => API.post("/syllabuscategory", { name })

export const updateCategory = (id, name) => API.put(`/syllabuscategory/${id}`, { name })
export const deleteCategory = (id) => API.delete(`/syllabuscategory/${id}`)








