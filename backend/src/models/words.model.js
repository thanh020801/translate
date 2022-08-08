const mongoose = require('mongoose')

const Word = mongoose.Schema({
	content: {
		type: String,
		require: true,
	},
	trans: {
		type: String,
		require: true,
	},
	star: {
		type: Boolean,
		default: false,
	}

},{timestamps: true})

module.exports = mongoose.model("Word", Word)

