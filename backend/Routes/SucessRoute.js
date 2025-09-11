const express = require("express");
const route =express.Router();
const QueryController = require("../Controller/SucessController");


route.post("/create", QueryController.Sucesserstudent);
route.get("/display", QueryController.Successerdisplay);
route.get("/editdisplay", QueryController.editDisplay);
route.put("/editsave/:id", QueryController.editDataSave);
route.delete("/:id", QueryController. StoryDelete);
route.get("/:id", QueryController. StoryDelete);



module.exports =route;