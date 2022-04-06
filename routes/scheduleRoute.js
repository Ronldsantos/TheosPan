
const router = require('express').Router();




router.get('/', ()=>{
	console.log("schedule get");
})
router.post('/',()=>{
	console.log("schedule post");
})

module.exports = router;



