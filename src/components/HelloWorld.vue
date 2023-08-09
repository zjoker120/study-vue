<template>
  <div class="Push">
    <input type="number" v-model="inputValue"/>
    <button @click="pushClick" class="pushButton">Push</button>
  </div>
  <div class="pop">
    <div>
      <button @click="popClick">Pop</button>
      <p>pop: {{ popValue }}</p>
    </div>
  </div>
  <div class="v-line">
    <div class="stack-container">


      <textarea rows="10" cols="20" v-model="stackStateText"></textarea>

    </div>
    <div class="area-container">
      <textarea rows="10" cols="40" v-model="textAreaValue"></textarea>
    </div>
  </div>
</template>

<script setup>
  import { ref,computed } from 'vue';

  const inputValue = ref(0);
  const stackState = ref([]);
  const popValue = ref('');
  const textAreaValue = ref('');

  const pushClick = () => {
    if (inputValue.value === null || inputValue.value === '') {
      return;
    }
    const pushMessage = `Pushed: ${inputValue.value}`;
    stackState.value.push(inputValue.value);
    updateStackState(pushMessage);
    inputValue.value = '';
  };

  const popClick = () => {
    if (stackState.value.length > 0) {
      const poppedValue = stackState.value.pop();
      popValue.value = poppedValue;
      updateStackState(`Popped: ${poppedValue}`);
    } else {
      popValue.value = '';
    }
  };

  const updateStackState = (message) => {
    stackState.value = [...stackState.value];
    textAreaValue.value = `${message}\n${textAreaValue.value}`;
  };
  const stackStateText = computed(() => stackState.value.join('\n'));
</script>

<style>
  .stack-container {
    display: flex;
    padding: 10px;
    width: 100%;
    height: 100px;
  }
  .area-container {
    display: flex;
    padding: 10px;


  }
  .v-line{
    border-left: thick solid #000;
    height:100%;
    left: 50%;
    position: relative;
  }
  .Push {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;
    top: 110px;
  }
  .pop {
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;
    top: 210px;
  }
  .pushButton{
    margin-left: 10px;
  }

</style>