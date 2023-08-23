<template>
  <div class="Push">
    <p class="inputText">입력:</p>
    <div>
      <input :type="selectedType === 'number' ? 'number' : 'text'"
             v-model="inputValue"
             maxlength="5"
             @input="handleInput"
      />
      <button @click="pushClick" class="pushButton">Push</button>
    </div>
  </div>
  <div class="pop">
    <div>
      <p>추출</p>
      <button @click="popClick">Pop</button>
      <p>pop: {{ popValue }}</p>
    </div>
  </div>
  <div class="v-line">
    <button @click="resetStack" class="resetButton">Reset</button>
    <label class="stackText">스택 이미지</label>
    <div class="stack-container">
      <div v-if="stackState.length > 0" class="outer-box">
        <div class="stack-box" v-for="(item, index) in stackState" :key="index" :style="{ fontSize: `${this.$route.query.selectedSize}px` }" >{{ item }}</div>
      </div>
    </div>

    <label class="logText">로그 메세지</label>
    <div class="area-container">
      <textarea class="downScroll" rows="10" cols="20" v-model="textAreaValue"></textarea>
    </div>
  </div>
  <div class="info">
    <p>Selected Type: {{ this.$route.query.selectedType }}</p>
    <p>Selected Size: {{ this.$route.query.selectedSize }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  const route = useRoute();
  const routes = useRouter();
  const selectedType = route.query.selectedType || '';
  const inputValue = ref(0);
  const stackState = ref([]);
  const popValue = ref('');
  const textAreaValue = ref('');


  //스택 추가
  const pushClick = () => {
    if (inputValue.value === null || inputValue.value === '') {
      return;
    }
    const pushMessage = `입력: ${inputValue.value}`;
    stackState.value.push(inputValue.value);
    updateStackState(pushMessage);
    inputValue.value = '';
  };
  //팝업 추출
  const popClick = () => {
    if (stackState.value.length > 0) {
      const poppedValue = stackState.value.pop();
      popValue.value = poppedValue;
      updateStackState(`추출: ${poppedValue}`);
    } else {
      popValue.value = '';
    }
  };
  //로그 메세지
  const updateStackState = (message) => {
    stackState.value = [...stackState.value];
    textAreaValue.value = `${textAreaValue.value}${message}\n`;
  };
  //스택이미지 초기화
  const resetStack = () => {
    routes.push({
      path: '/',
    });
  };
  //문자열 받을지 숫자 받을지
  const handleInput = () => {
    if (selectedType === 'string') {
      inputValue.value = inputValue.value.toString();
    } else if (selectedType === 'number') {
      inputValue.value = inputValue.value.toString().replace(/[^0-9]/g, '').slice(0, 6);
    }
  };




</script>

<style>
  .inputText{
    margin-right: 10px;
  }
  .stack-container {
    width: 250px; /* Set a fixed width for the container */
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column-reverse;

  }
  .stack-box {
    border: 1px solid black;
    padding: 15px;
    margin-bottom: 5px;
    text-align: center;
    width: 50px;
  }
  .stackText{
    display: flex;
    padding: 10px;
  }
  .logText{
    display: flex;
    padding: 10px;
    position: relative;
    top: 50px;
  }
  .area-container {
    display: flex;
    padding: 10px;
    position: relative;
    top: 50px;
  }
  /*가운데 선*/
  .v-line{
    border-left: solid #000;
    height:100%;
    left: 50%;
    position: relative;
    align-items: center;
  }
  /*input 입력/버튼 */
  .Push {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;
    top: 160px;
  }
  /*pop 버튼/출력*/
  .pop {
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;
    top: 210px;
  }
  /*버튼 위치 */
  .pushButton{
    margin-left: 10px;
  }
  /*스택 이미지를 감싸는 box */
  .outer-box {
    border: 2px solid #ccc;
    padding: 15px;
    display: inline-flex;
    width: 80px;
    margin: 10px;
    flex-direction: column-reverse;
  }


  /* Reset 버튼 */
  .resetButton {
    margin-top: 10px;
    margin-left: 200px;
  }

  .info {
    position: absolute;
    top: 500px;
    left: 0;
    padding: 10px;
  }
</style>
