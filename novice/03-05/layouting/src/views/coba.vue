<template>
<div>
    <navbar/><br>
    <div><status/></div><br>
    <collapse/>
    <menu/>
</div>
    
</template>
<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import status from '@/components/status.vue'
import collapse from "@/components/collapse.vue"
import menu from "@/components/menu.vue"

export default {
  components: {
    navbar,
    status,
    collapse,
    menu
  }
}
</script>
