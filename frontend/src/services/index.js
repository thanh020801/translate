// var voice = 0
// var rate = 1
// export function getToVoice(v,r){
// 	voice = v
// 	rate = r
// 	console.log(voice,rate)
// }
// console.log(voice,rate)
export function textToSpeech(text,voice=0,rate=1,lang='en-US'){
	const synth = window.speechSynthesis;
	const voices = synth.getVoices();
	const utterThis = new SpeechSynthesisUtterance(text);
	// const randomVoice = Math.floor(Math.random() * 6);
	utterThis.lang = lang;
	utterThis.voice = voices[0]
	utterThis.rate = rate
	synth.speak(utterThis);
}


import axios from 'axios'

export const API = (method="get",endpoint='/',data=null)=>{
	return axios({
		method:method,
		url: `http://localhost:5000${endpoint}`,
		data:data,
		headers:{
			"Content-type":"Application/json",
		},
	})
}

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "English is hard, but detectably so");
// export const APITranslate = ()=>{
// 	return axios({
// 		method: 'POST',
// 		url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
// 		headers: {
// 			'content-type': 'application/x-www-form-urlencoded',
// 			// 'Accept-Encoding': 'application/gzip',
// 			'X-RapidAPI-Key': 'f55af00855msh6f8403cef7b59a8p1fe464jsn4e4702a11f55',
// 			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 		},
// 		data: encodedParams
// 	})
// }



export const APITranslate = (newWord)=>{
	const encodedParams = new URLSearchParams();
	encodedParams.append("q", newWord);
	encodedParams.append("target", "vi");
	encodedParams.append("source", "en");
	return axios({
		method: 'POST',
		url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			// 'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key': 'f55af00855msh6f8403cef7b59a8p1fe464jsn4e4702a11f55',
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		},
		data: encodedParams
	})
}



// const axios = require("axios");

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "es");
// encodedParams.append("source", "en");

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': 'f55af00855msh6f8403cef7b59a8p1fe464jsn4e4702a11f55',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



// const axios = require("axios");

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "hello");

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     // 'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': 'f55af00855msh6f8403cef7b59a8p1fe464jsn4e4702a11f55',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// const options = {
//   method: 'GET',
//   url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
//   params: {text: 'Hello, world!!', to: 'es', from: 'en'},
//   headers: {
//     'X-RapidAPI-Key': 'f55af00855msh6f8403cef7b59a8p1fe464jsn4e4702a11f55',
//     'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });