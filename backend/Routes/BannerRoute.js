const express = require("express");
const route =express.Router();
const BannerController = require("../Controller/BannerController");


route.post("/create", BannerController.BannerSave);
route.get("/alldisplay", BannerController.getAllBanner);
route.get("/editdisplay", BannerController.editDisplay);
route.post("/editsave", BannerController.editDataSave);
route.delete("/deleted/:id", BannerController.BannerDelete);











module.exports =route;