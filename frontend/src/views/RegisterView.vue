<template>
<form>
  <h2>Register</h2>
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
  <button type="button" @click='register()' class="btn btn-primary btn-block mb-4">Sign up</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>is a member? <router-link to="/login">Sign in</router-link></p>
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
      register(){
        console.log(this.name)
        console.log(this.password)
        if(this.name !== "" && this.password !== ""){
          API('post', '/register', {name: this.name, password: this.password})
          .then((res)=>{
            alert('register successfully')
            this.$router.push('/login')
          }).catch((err)=>{
            alert(err.response.data)
          })
        }else{
          alert('please fill name or password')
        }

      }
    }
  }
</script>