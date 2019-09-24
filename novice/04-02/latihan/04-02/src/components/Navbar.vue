<template>
    <div>
        <div>
        <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item >Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
       isActive: function(event){
           if(event){
               active
           }
       }
    }
}
</script>

