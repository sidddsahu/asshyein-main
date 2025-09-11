const express = require("express");
const enquiryController = require("../Controller/EnrollController");

const router = express.Router();

router.get("/alldisplay", enquiryController.EnquiryDisplayAll);
router.get("/editdisplay", enquiryController.editDisplay);

router.get("/today", enquiryController.EnquiryDisplayToday); // ✅ NEW ROUTE
router.post("/editsave/:id", enquiryController.editDataSave);

router.get("/getproducts/:id", enquiryController.EnquiryGetProduct);
router.delete("/alldelete/:id", enquiryController.EnquiryDelete);
router.post("/:id", enquiryController.EnquiryProduct);

module.exports = router;
