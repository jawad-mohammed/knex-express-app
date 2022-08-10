const express = require("express");
const router = express.Router();
//use controller for post/put/get methods
const personController =  require('../controller/person')
router.post('/',personController.createPerson)



module.exports = router;