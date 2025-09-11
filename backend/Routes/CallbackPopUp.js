const express = require('express');
const enquiryController = require('../Controller/CallbackPopUpController');

const router = express.Router();


router.post("/add", enquiryController.CallbackPopUp);
router.get("/allcallback", enquiryController. ContactDisplay);
router.get("/editdisplay", enquiryController.editDisplay);
router.put("/editsave/:id", enquiryController.editDataSave);

router.delete("/allcallback/:id", enquiryController.RecordDelete);

module.exports = router;