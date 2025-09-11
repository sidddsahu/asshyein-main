const express = require("express");
const ContactController = require("../Controller/SyllabusRegisterController");

const router = express.Router();

router.post("/add", ContactController.ContactProduct);
router.get("/allcontact", ContactController.ContactDisplay);
router.delete("/alldelete/:id", ContactController.RecordDelete);

router.put("/update/:id", ContactController.ContactUpdates);

module.exports = router;
