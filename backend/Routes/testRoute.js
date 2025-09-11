const express = require("express");
const route =express.Router();
const QueryController = require("../Controller/testController");


route.post("/create", QueryController.CourseSave);
route.get("/display", QueryController.getAllCourse);
route.get("/editdisplay", QueryController.editDisplay);
route.delete("/:id", QueryController.PreDelete);
route.get("/preseries/:id", QueryController.getCourseWithTestModules);
route.put("/editsave/:id", QueryController.editDataSave);

// route.get("/display", QueryController.Successerdisplay);
// route.delete("/:id", QueryController. StoryDelete);


module.exports =route;