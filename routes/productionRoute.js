const router = require('express').Router();
const productionController = require('../controllers/productionController')


// router.get('/', ()=>{
// 	console.log("production get");
// })
router.get('/productions/:id', productionController.getProductions)
// router.get('/productions/:id', productionController.getProduction)
router.post('/',productionController.addProduction)


module.exports = router;



