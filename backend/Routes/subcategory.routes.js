const express = require("express");
const {
  getAllSubcategorys,
  getSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getSubcategoriesByCategory,
} = require("../Controller/subcatgory.controller");

const router = express.Router();

router.post("/", createSubcategory);
router.get("/", getAllSubcategorys);
router.get("/:categoryId", getSubcategoriesByCategory);
router.get("/:id", getSubcategoryById);
router.put("/:id", updateSubcategory);
router.delete("/:id", deleteSubcategory);

module.exports = router;
