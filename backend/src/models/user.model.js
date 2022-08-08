const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require:true,
	},
	dictionary: {
		type: Array,
		default: [],
	}

},{timestamps: true})

module.exports = mongoose.model("ClientSchema", ClientSchema)

