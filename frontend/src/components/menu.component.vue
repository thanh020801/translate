<template>
<div class="menu">
	<nav class="navbar ">
	  <div class="container-fluid">
	  	<i class="bi bi-list" @click='checkMenu=!checkMenu'></i>
	    <router-link class="navbar-brand" to="/">MEGA-DICTIONARY</router-link>
	    <router-link to='/search'><i class="bi bi-search"></i></router-link>


	    <div v-if='checkMenu' class="contentMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="navbar-brand" to="/">Vocabulary</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link " href="#"  role="button"  aria-expanded="false">
            Speech
          </a>
          <ul class="speechDropdown" aria-labelledby="navbarDropdown">
            <li>
            	<div class="nav-link speech" href="#">Voice</div>
            	<div class="voice speech ">
            		<div class="gender" @click='voiceGender(0)'>
            			<i class="bi bi-gender-male "></i> Male
            		</div>
            		<div class="gender" @click='voiceGender(1)'>
            			<i class="bi bi-gender-female"></i> Female
            		</div>
            		
            	</div>
            </li>
            <li><div class="nav-link speech" href="#">Rate</div>
				<input type="range" min='0.8' max='1.4' step="0.1" v-model="rateVoice">

            </li>
            <li>
            	<div class="trans" @click='translate()'>translate</div>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " to='/login'>Login</router-link>
        </li>
      </ul>
    </div>
	  </div>
	</nav>

</div>
</template>
<script>
	import Search from '@/components/search.component.vue'
	// import {getToVoice} from '@/services'
		import {APITranslate} from '@/services/'

	export default{
		data(){
			return{
				voice: 1,
				rateVoice: 1,
				checkMenu: false,
			}
		},
		components:{
			Search
		},
		methods:{
			voiceGender(num){
				this.voice = num
				// getToVoice(this.voice,this.rateVoice)
			},
			translate(){
				APITranslate('result').then((res)=>{
					console.log(res.data.data.translations[0].translatedText)
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			window.addEventListener('click', (e)=>{
				if(!this.$el.contains(e.target)){
					this.checkMenu = false
				}
			})
		}
	}
</script>
<style type="text/css" scoped>
	@media only screen and (max-width: 400px) {
		.menu{
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
	.navbar{
		width: 100%;
		position: fixed;
		background-color: blue;
		top: 0px;
		border-bottom: 3px solid black;
	}
	form{
		margin-bottom: 1rem;
	}
	.gender{
		padding: 0 1rem;
	}
	.contentMenu{
		width: 80%;
		height: 100vh;
		background-color: pink;
		position: absolute;
		top: 3.65rem;
		left: 0rem;
		display: block;
		padding: 0.5rem 1rem;
	}
	.speech{
		padding: 0 1rem;
		text-decoration: none;
	}
	.speechDropdown{
		list-style: none;
	}


	}


</style>