<template>
    <div>
        <h3 >
            {{todo.title}}
        </h3>
    </div>
    
</template>

<script>
export default {
    name: "Todos",
    props:["todos"]
}
</script>

<style scoped>

</style>