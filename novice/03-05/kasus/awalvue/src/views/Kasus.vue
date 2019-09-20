<template>
    <div>
    <Confirm/><br>
    <Buton/><br>
    <grid/>
    </div>
</template>

<script>
//import menu from "@/components/Menu.vue";
import Confirm from "@/components/Confirm.vue"
import grid from "@/components/Grid.vue"
import Buton from "@/components/Button.vue"

export default {
    components:{
        //menu
        Confirm,
        Buton,
        grid
        
    }
}
</script>