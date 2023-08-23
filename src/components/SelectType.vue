<template>
    <div class="choosetype">
        <div >
            <h1>Type 선택</h1>
            <div>
                <label>
                    <input type="radio" v-model="selectedType" value="string" /> 문자열
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" v-model="selectedType" value="number" /> 숫자
                </label>
            </div>
            <p>선택된 타입: {{ selectedType }}</p>
        </div>
    </div>
    <div class="size">
        <label for="boxSize">크기: </label>
        <select v-model="selectedSize" id="boxSize">
            <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
        </select>
    </div>
    <div class="moveButton">
        <button @click="pageMove">생성</button>
    </div>

</template>

<script setup>
    import { ref  } from 'vue';
    import { useRouter } from 'vue-router';


    const selectedSize = ref('2');

    const routes = useRouter();

    const selectedType = ref('string');
    //스택갯수 조절 1-99까지
    const sizes = Array.from({ length: 10 }, (_, index) => (index + 1).toString());
    //버튼 클릭시 이벤트 발생
    const pageMove = () => {
        routes.push({
            path: '/InputPop',
            query: {
                selectedType: selectedType.value,
                selectedSize: selectedSize.value,
            },
        });
    };


</script>

<style scoped>
    /*타입 위치*/
    .choosetype {
        text-align: left;
        margin-top: 120px;
        margin-left: 50px;}
    /*크기 위치*/
    .size {
        text-align: center;
        margin-top: -150px;

    }
    /*페이지 이동 버튼*/
    .moveButton {
        text-align: center;
        margin-top: 300px; /* 버튼 위 간격 설정 */
    }
</style>