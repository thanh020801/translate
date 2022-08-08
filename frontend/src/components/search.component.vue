<template>
	<form class="d-flex">
        <input class="form-control me-2" v-model='searchKey' type="search" placeholder="Translate" aria-label="Search">

        <button class="btn btn-outline-success" @click.prevent='translate(searchKey)'>Translate</button>
       
    </form>

	<Word :item='word' v-if='word.trans !== ""'/>
     
</template>
<script>
	import Word from '@/components/words.component.vue'
	import {APITranslate} from '@/services/'
	export default{
		data(){
			return{
				searchKey: "",
				word:{
					content: "",
					trans: "",
				},

				istrans: false,
			}
		},
		components:{
			Word,
		},
		methods:{
			translate(searchKey){
				this.istrans = true
				APITranslate(searchKey).then((res)=>{
					console.log(res.data.data.translations[0].translatedText)
					this.word.trans = res.data.data.translations[0].translatedText
					this.word.content = searchKey
				}).catch((err)=>{
					console.log(err)
				})
				this.searchKey = ''

			},
			addWord(){
				this.istrans = false
			}
		}
	}
</script>
<style type="text/css" scoped>
	.result{
		width: 90%;
		line-height: 30px;
		font-size: 18px;
		margin: 1rem;
		background-color: red;
	}
	.col-sm-2{
		font-size: 30px;
	}
	form{
		margin:0 0.5rem;
		margin-bottom: 1rem;
	}
</style>