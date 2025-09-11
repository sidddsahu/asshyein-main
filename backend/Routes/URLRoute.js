// const express = require("express");
// const route =express.Router();
// const URLController = require("../Controller/URLController");


// route.post("/create", URLController.CourseSave );
// route.get("/display", URLController.ContactDisplay);
// route.get("/:id", URLController.editDisplay);
// route.put("/:id", URLController.editDataSave)
// route.delete('/:id', URLController.URLDeleted);




  



// module.exports =route;



const express = require("express");
const route = express.Router();
const URLController = require("../Controller/URLController");

route.post("/create", URLController.URLSave);
route.get("/display", URLController.URLDisplay);
route.get("/:id", URLController.URLDisplayById);
route.put("/:id", URLController.URLUpdate);
route.delete("/:id", URLController.URLDelete);

module.exports = route;