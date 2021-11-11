var express = require('express'); 
const Elephant_controlers= require('../controllers/Elephant'); 
var router = express.Router(); 
 
/* GET Elephants */ 
router.get('/', Elephant_controlers.Elephant_view_all_Page ); 
module.exports = router; 