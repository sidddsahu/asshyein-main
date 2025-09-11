const express = require("express");
const router = express.Router();
const socialController = require("../../Controller/SocailMedia/SocialMediaController");

// Create a new social link
router.post("/", socialController.createSocial);

// Get all social links
router.get("/", socialController.getAllSocials);

// Get single social link
router.get("/:id", socialController.getSocialById);

// Update a social link
router.put("/:id", socialController.updateSocial);

// Delete a social link
router.delete("/:id", socialController.deleteSocial);

module.exports = router;