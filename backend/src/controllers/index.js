const mongoose = require('mongoose')
const Word = require('../models/words.model')
const User = require('../models/user.model')


const controller = {
	// ĐĂNG KÝ
	register: async(req,res)=>{
		try{
			const user = await User.findOne({name: req.body.name})
			if(user !== null){
				return res.status(300).json("Name is available")
			}else{
				const newUser = User({
					name: req.body.name,
					password: req.body.password,
				})
				const newU = await newUser.save()
				return res.status(200).json(newU)		
			}
			
		}catch(err){
			return res.status(500).json(err)
		}
	
	},

	// ĐĂNG NHẬP
	login: async(req,res)=>{
		try{
			const user = await User.findOne({name: req.body.name})
			if(!user){
				return res.status(300).json("User is not available")
			}
			if(user && user.password !== req.body.password){
				return res.status(300).json('password failed')
			}
			if(user && user.password === req.body.password){
				return res.status(200).json(user)	
			}
		}catch(err){
			return res.status(500).json(err)
		}
	
	},

	// Xóa TỪ TRONG TỪ ĐIỂN
	delete: async(req,res)=>{
		try{
			const word = await Word.findByIdAndDelete(req.params.id)
			if(!word){
				return res.status(403).json("nan")
			}		
			return res.status(200).text("Delete Successfully")	
		}catch(err){
			return res.status(500).json(err)
		}

		
	},

	// THÊM TỪ VÀO TỪ ĐIỂN
	add: async(req,res)=>{
		try{
			console.log('content: ',req.body.content)
			console.log('req',req.body)
			const newWord = Word({
				content: req.body.content,
				trans: req.body.trans,
				star: req.body.star,
			})
			const word = await newWord.save()
			if(!word){
				return res.status(403).json("Nan")
			}
			return res.status(200).json(word)		
		}catch(err){
			return res.status(500).json(err)
		}
	
	},

	// CẬP NHẬT 1 TỪ TRONG TỪ ĐIỂN
	update: async(req,res)=>{
		try{
			const word = await word.findByIdAndUpdate(
				req.params.id,req.body,{new: true}
			)
			if(!word){
				return res.status(403).json("Cập nhật không thành công")
			}
			return res.status(200).json(word)		
		}catch(err){
			return res.status(500).json(err)
		}
	
	},
	// XÓA TOÀN BỘ TỪ ĐIỂN
	deleteAll: async(req,res)=>{
		try{
			const word = await Word.remove()
			if(!word){
				res.status(403).json("Không có quyền xóa")
			}
			res.status(200).json("Delete Successfully")		
		}catch(err){
			return res.status(500).json(err)
		}
	
	},
}

module.exports = controller