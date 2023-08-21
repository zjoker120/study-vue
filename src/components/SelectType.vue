<template>
    <div class="left">
        <div >
            <h1>Type 선택</h1>
            <div>
                <label>
                    <input type="radio" v-model="selectedType" value="문자열" /> 문자열
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" v-model="selectedType" value="숫자" /> 숫자
                </label>
            </div>
            <p>선택된 타입: {{ selectedType }}</p>
        </div>
    </div>
    <div class="size">
        <label for="fontSize">크기: </label>
        <select v-model="selectedSize" id="fontSize">
            <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
        </select>
    </div>
    <div class="moveButton">
        <button @click="pageMove">생성</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const selectedSize = ref('12');

    const routes = useRouter();

    const selectedType = ref(null);
    const sizes = Array.from({ length: 99 }, (_, index) => (index + 1).toString());
    const pageMove = () => {
        routes.push('/InputPop');
    };

</script>

<style scoped>

    .left {
        text-align: left;
        margin-top: 120px;
    }

    .size {
        text-align: center;
        margin-top: 0px;

    }

    .moveButton {
        text-align: center;
        margin-top: 220px; /* 버튼 위 간격 설정 */
    }
</style>