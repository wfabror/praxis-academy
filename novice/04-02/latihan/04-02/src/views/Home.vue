<template>
  <div class="home">
    <div class="container-fluid">
        <navbar/>
    </div>
    
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>
