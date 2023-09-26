<template>
    <div>
        <div >
            <h1 class="center">This heading will not be affected</h1>
            <p class="center">This paragraph will be red and center-aligned.</p>
        </div>
    </div>
    <div>
        <input type="checkbox" value="사과" v-model="fu"/><label>사과</label>
        <input type="checkbox" value="바나나" v-model="fu"/><label>바나나</label>
        <input type="checkbox" value="자두" v-model="fu"/><label>자두</label>
        <button @click="pickFruits">pick</button>
        <p>선택한 과일 : {{selectedFruit}}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const fu = ref([]);
    const selectedFruit = ref([]);

    const pickFruits = () => {
        selectedFruit.value = fu.value.filter(fruit => fu.value.includes(fruit));
    };
</script>

<style scoped>
    p.center {
        text-align: center;
        color: #ff0000;
    }
</style>
