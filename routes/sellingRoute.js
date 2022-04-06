const router = require('express').Router();



router.get('/', (req,res)=>{
	console.log("selling get");
	res.send({
		message:"yesah"
	})
})
router.post('/',()=>{
	console.log("selling post");
	res.send({
		message:"yesah"
	})
})

module.exports = router;



