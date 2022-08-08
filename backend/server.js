const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./src/config')
const routers = require('./src/routers')
const app = express()

const PORT = config.port
const URI = config.DB.uri

app.use(cors())
app.use(express.json())

mongoose.connect(URI)
	.then(()=>{
		console.log("Database is connecting !!!")
	})
	.catch((err)=>{
		console.log("err: ",err)
	})

app.use('/',routers)

app.listen(PORT, ()=>{
	console.log('Server is running: ',PORT)
})