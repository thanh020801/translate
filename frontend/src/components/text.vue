<template>
	<div>{{word}}</div>
	<button @click='translate(word)'></button>
	<div>{{trans}}</div>
</template>
<script>
	import {APITranslate} from '@/services/'
	export default{
		data(){
			return{
				word: 'hello',
				trans: "",
			}
		},
		methods:{
			translate(){
				APITranslate().then((res)=>{
					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>