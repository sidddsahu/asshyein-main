import axios from "axios"
import { base_url } from "../../src/judement/utils/base_url"

// const API = axios.create({ baseURL: "https://qr-scanner-server.onrender.com" })

const API = axios.create({ baseURL: base_url })

// Category and subcategory endpoints
export const fetchcategory = () => API.get("/judementcategory")

export const addCategory = (name) => API.post("/judementcategory", { name })

export const updateCategory = (id, name) => API.put(`/judementcategory/${id}`, { name })
export const deleteCategory = (id) => API.delete(`/judementcategory/${id}`)








