<template>
    <h1>{{ title }}</h1>
    <router-link :to="{ name: 'test'}">
        Test
    </router-link>
</template>
<script>
export default 
{
    setup: () => ({
        title: 'How To Install Vue 3 in Laravel 8 From Scratch'
    })
}
</script>