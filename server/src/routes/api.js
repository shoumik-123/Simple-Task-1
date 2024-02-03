const express = require('express');
const Controller = require("../controllers/Controller")
// const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const router = express.Router();



router.post("/create",Controller.Create)
router.get("/read",Controller.ReadData)
router.get("/readByID/:id",Controller.ReadByID)
router.post("/update/:id",Controller.Update)
router.post("/delete/:id",Controller.Delete)




module.exports =router;