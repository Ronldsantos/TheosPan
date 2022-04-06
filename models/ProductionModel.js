const mongoose = require('mongoose')

const ProductionSchema = new mongoose.Schema({
	tray:{ type: Number, required: [true, "Tray amount required"]},
	pieces:{ type: Number, required: [true, "Pieces required"]},
	yeast:{ type: Number, required: [true, "Yeast amount required"]},
	userId:{type:String, require:[true, "User Id required"]}
})

module.exports= mongoose.model('Production',ProductionSchema);