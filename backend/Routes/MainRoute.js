const express = require("express");
const route =express.Router();
const QueryController = require("../Controller/MainController");


route.post("/create", QueryController.CourseSave);
route.get("/display", QueryController.getAllCourse);
route.delete("/:id", QueryController.PreDelete);
route.get("/maintestseries/:id", QueryController.getCourseWithTestModules);
route.get("/editdisplay", QueryController.editDisplay);
route.put("/editsave/:id", QueryController.editDataSave);




module.exports =route;