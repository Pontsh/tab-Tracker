<template>
  <div class="hello">

      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'register'
        }">
       Clock In
      </router-link>
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'clientstatus'
        }">
       Client Status
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
   background-color: #db3d0d;
    border-radius: 4px;
    padding: 8px 20px;
    color: #fff;
    margin: 20px;
    cursor: pointer;
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
