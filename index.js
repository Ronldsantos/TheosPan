const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
// app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/inventory',{useNewUrlParser:true, useUnifiedTopology:true})
	.then(()=>{
		console.log("Connection Open")
	}).catch( err => {
		console.log("error: ")
		console.log(err)
	})

app.use('/api/production', require('./routes/productionRoute'))
app.use('/api/selling', require('./routes/sellingRoute'))
app.use('/api/schedule', require('./routes/scheduleRoute'))

app.listen(port, ()=>{
	console.log(`Server running on port ${port}`)

})