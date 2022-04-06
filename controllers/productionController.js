const Production = require('../models/ProductionModel')


const data = {
	add:"insideasdasdasf add production",
	update:"inside update production",
	delete:"inside delete production",



}

module.exports.getProduction = 	(req,res)=>{
	res.send({
		message:data.add
	})
}

module.exports.getProductions = (req,res)=>{
	Production.find({})
	//change this later double check
	.then(production=>{
		res.send(production)
	})
	.catch(err=>res.send(err))
	// res.send({
	// 	message:"get all"

	// })

}

module.exports.addProduction = 	(req,res)=>{
	let entry = new Production({
		tray:req.body.tray,
		pieces:req.body.pieces,
		yeast:req.body.yeast,
		userId:req.body.userId
	})
	console.log(entry)
	entry.save()
	.then(entry=>{
		res.send(entry)
		})
	.catch(err=>{
		res.send(err)
		})

	

}
module.exports.updateProduction = 	(req,res)=>{
	res.send({
		message:data.update
	})


}
module.exports.deleteProduction = 	(req,res)=>{
	res.send({
		message:data.delete
	})


}