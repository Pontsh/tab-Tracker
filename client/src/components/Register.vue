<template>
  <div class="hello">
  <div class="clockInForm">
  <h1>Clock In</h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="Email Address"/>
  <br>
  <input
    type="text"
    name="name"
    v-model="name"
    placeholder="Full Names"/>
  <button class="btn" @click="register">Clock In</button>
</div>

  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Client from '@/services/Client'

export default {
  data () {
    return {
      email: '',
      name: ''
    }
  },
  methods: {
    async register () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

      console.log('Register has been press', date + ' ' + time)
      const message = await AuthenticationService.register({
        email: this.email,
        name: this.name,
        loginTime: time,
        loginDate: date

      })
      alert('you have succesfully clocked in')
      console.log(message.data)
      Client.clients().then(response => (this.info = response))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clockInForm{
  max-width: 420px;
  margin: auto;
}

input[type]{
    font-size: 1em;
    width: 100%;
    border-radius: 6px;
    border: 2px solid #db3d0d;
    outline:   #c3cfcf;
    margin-top: 10px;
}

.btn{
  background-color: #db3d0d;
    border-radius: 4px;
    padding: 8px 20px;
    color: #fff;
    border: none;
    margin-top: 10px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
