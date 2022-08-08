<template>
	<div class="word row" v-if='!see' >
		<div class="col-sm-8" @click='convert(see)'>{{item.content}}</div>
		<div class="col-sm-2">
			<i class="bi bi-star-fill"  @click='addWord()'></i>
		</div>
		<div class="col-sm-2" @click='listening(item.content)'>
			<i class="bi bi-megaphone-fill"></i>
		</div>
	</div>
	
	<div class="word row" v-else >
		<div class="col-sm-8" @click='convert(see)'>{{item.trans}}</div>
		<div class="col-sm-2">
			<i class="bi bi-star-fill" @click='addWord()'></i>
		</div>
		<div class="col-sm-2"  @click='listening()'><i class="bi bi-megaphone-fill"></i></div>
	</div>	
</template>
<script>
	import {textToSpeech,API} from '@/services/index.js'
	export default{
		data(){
			return {
				see: false,
			}
		},
		props:['item'],
		methods:{
			listening(text){
				textToSpeech(text)
			},
			convert(see){
				this.see = !see
				setTimeout(()=> this.see = false, 3000)
			},
			addWord(){
				console.log(this.item.content,this.item.trans)
				API('get','/add',{content: this.item.content, trans: this.item.trans, star: false})
				.then((res)=>{
					// console.log(this.item.content,this.item.trans)
					console.log(res.data)
				}).catch((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>
<style type="text/css" scoped>
	ul{
		margin: 2px;
		padding: 0px;
	}
	.word{
		width: 200px;
		min-height: 30px;
		background-color: green;
		/*padding: 10px;*/
		cursor: pointer;
		/*border-bottom: 1px solid black;*/
	}
	.col-sm-2{
		background-color: gold;
	}
	@media only screen and (max-width: 400px) {
		.word{
			width: 100%;
			height: 40px;
			margin: 0 auto;
		}
		.col-sm-8{
			width: 76%;
		}
		.col-sm-2{
			width: 12%;
			background-color: red;
	}	}
</style>