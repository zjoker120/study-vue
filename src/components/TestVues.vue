<template>
    <div>
        <Header />
        <div >
            <h1 class="center">This heading will not be affected</h1>
            <p class="center">This paragraph will be red and center-aligned.</p>
        </div>
    </div>
    <div>
        
    </div>
</template>

<script setup>
    import Header from '@/components/AppHeader.vue';
</script>

<style scoped>
    p.center {
        text-align: center;
        color: #ff0000;
    }
</style>
