const express = require("express");
const route =express.Router();
const PlayController = require("../../Controller/PlaystoreController/PlayStorecontroller");


route.post("/create", PlayController.BannerSave);
route.get("/alldisplay", PlayController.getAllBanner);
route.get("/editdisplay", PlayController.editDisplay);
route.post("/editsave", PlayController.editDataSave);
route.delete("/deleted/:id", PlayController.BannerDelete);











module.exports =route;