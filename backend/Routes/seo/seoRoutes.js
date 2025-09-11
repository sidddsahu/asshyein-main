const express = require("express");
const router = express.Router();
const seoController = require("../../Controller/Seo/seoController");

router.post("/", seoController.createSEO);
router.get("/", seoController.getAllSEO);

// Update by ID
router.put("/:id", seoController.updateSeo);

// Delete by ID
router.delete("/:id", seoController.deleteSeo);

module.exports = router;
