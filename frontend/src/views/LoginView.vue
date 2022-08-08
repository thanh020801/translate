<template>
<form>
  <h2 class="form-outline mb-4">Login</h2>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" v-model='name' />
    <label class="form-label" for="form2Example1">Name</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" v-model='password' />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- Submit button -->
  <button type="button" @click='login()' class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <router-link to="/register">Register</router-link></p>
  </div>
</form>
</template>

<script >
  import {API} from '@/services'
  export default{
    data(){
      return{
        name: "",
        password: "",        
      }
    },
    methods:{
      login(){
        if(this.name === "" || this.password === ""){
          alert('please fill name or password')
        }else{
          API('post', '/login', {name: this.name, password: this.password})
          .then((res)=>{
            console.log(res)
            alert('login successfully')
            this.$router.push('/')
          }).catch((err)=>{
            alert('name or password failed')
          })
        }
      }
    }
  }
</script>