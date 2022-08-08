<template>
	<div class="fill">
		<input type="text" v-model='content'>
		<select v-model='selectVoice'>
			<option value='1'>Ferm</option>
			<option value='2'>Fare</option>
		</select>
		<input type="range" min='0.8' max='1.4' step="0.1" v-model="rateVoice">
		<button @click='textToSpeech()' class="btn btn-primary"><i class="bi bi-megaphone-fill"></i></button>
		<h3>{{result}}</h3>
	</div>

	{{content}}
</template>

<script>	
	export default{
		data(){
			return{
				content: "hello good morning",
				selectVoice: 5,
				rateVoice: 1,
				result: "",
			}
		},
		methods:{
			textToSpeech(){

				const synth = window.speechSynthesis;

				const voices = synth.getVoices();

				const utterThis = new SpeechSynthesisUtterance(this.content);

				utterThis.lang = 'en-US';
				utterThis.voice = voices[this.selectVoice]
				utterThis.rate = this.rateVoice
				synth.speak(utterThis);
			}
		}
	}
</script>