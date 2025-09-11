const express = require("express");
const {
  getAllSubcategorys,
  getSubcategoryById,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getByParentSubcategory,
} = require("../Controller/subsubCategoryController");

const router = express.Router();

router.get("/", getAllSubcategorys);
router.post("/", createSubcategory);

// GET by parent subCategory (IMPORTANT: keep before '/:id')
router.get("/by-sub/:subCategoryId", getByParentSubcategory);

router.get("/:id", getSubcategoryById);
router.put("/:id", updateSubcategory);
router.delete("/:id", deleteSubcategory);

module.exports = router;
