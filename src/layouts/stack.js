//inputText 입력값
const inputText = document.getElementById("inputText");
//입력 버튼
const inputBtn = document.getElementById("inputBtn");
//팝버튼
const popBtn =document.getElementById("popBtn");
//초기화 버튼
const resetBtn = document.getElementById("resetBtn");
//스택 이미지
const stackContainer = document.getElementById("stackContainer");
//팝추출 값
const popValue = document.getElementById("popValue");
//로그 메세지
const logText = document.getElementById("logText");

let stackValue = [];

popBtn.addEventListener("click",()=>{
    if(stackValue.length > 0){
        const popValues = stackValue.pop();
        popValue.textContent = `pop: ${popValues}`;
        updateStackContainer(`추출: ${popValues}`);
    }else {
        popValue.textContent = "pop:";
        alert("마지막 추출입니다.");
    }
});

inputBtn.addEventListener("click",()=>{
    let inputValue = inputText.value;
    if(inputValue ===""){
        alert("입력값을 적지 않았습니다.");
        return;
    }
    stackValue.push(inputValue);
    updateStackContainer(`입력: ${inputValue}`);
    inputText.value = "";
});

resetBtn.addEventListener("click",()=>{
    console.log("리셋버튼",resetBtn.value);
    stackValue.length = 0;
    stackContainer.innerHTML = "";
    logText.value = "";
})

function updateStackContainer(message){
    stackContainer.innerHTML = stackValue.reverse().map(item => `<div>${item}</div>`).join("");
    logText.value = `${message}\n` + logText.value;
    stackValue.reverse();

}
