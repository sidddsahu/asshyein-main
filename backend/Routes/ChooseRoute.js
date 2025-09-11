const express = require("express");
const route =express.Router();
const QueryController = require("../Controller/WhyChooseController");


route.post("/create", QueryController.SuccesserStudent);
route.get("/display", QueryController.SuccesserDisplay);
route.delete("/:id", QueryController. StoryDelete);
route.get("/editdisplay", QueryController.editDisplay);
route.put("/editsave/:id", QueryController.editDataSave);


module.exports =route;