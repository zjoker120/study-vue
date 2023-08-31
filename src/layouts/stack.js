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

const stackValue = [];

popBtn.addEventListener("click",()=>{
    console.log('pop버튼',popBtn.value);
});

inputBtn.addEventListener("click",()=>{
    console.log("입력버튼",inputBtn.value);
    const inputValue = inputText.value;
    if(inputValue ===""){
        alert("입력값을 적지 않았습니다.");
        return;
    }
    stackValue.push(inputValue);
});

resetBtn.addEventListener("click",()=>{
    console.log("리셋버튼",resetBtn.value);
})