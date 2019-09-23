<template>
  <div id="home">
    <Todos v-bind:todos="todos"/>
    <p>List dibawah</p>
  </div>
</template>

<script>
// @ is an alias to /src

import Todos from '@/components/Todos.vue'
import navbar from '@/components/navbar.vue'


export default {
  name: 'home',
  components: {
    Todos,
    navbar
  },
  data() {
    return{
      todos:[
        {
          id: 1,
          title:'Bagian Satu',
          completed: false
        },
        {
          id: 2,
          title: 'Bagian dua',
          completed: true
        },
        {
          id: 3,
          title: 'Bagian tiga',
          completed: false

        }
      ]
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin : 0;
    padding : 0;
  }

  .body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
