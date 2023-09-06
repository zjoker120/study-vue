document.addEventListener("DOMContentLoaded", function () {
    const selectedTypeRadioButtons = document.getElementsByName("selectedType");
    const selectedTypeElement = document.getElementById("selectedType");
    const selectedSizeSelect = document.getElementById("boxSize");
    const generateButton = document.getElementById("generateButton");

    // 초기 선택 값을 설정합니다.
    let selectedType = "string";

    // 라디오 버튼 변경 이벤트를 처리합니다.
    selectedTypeRadioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
            selectedType = radio.value;
            selectedTypeElement.textContent = selectedType;
        });
    });

    generateButton.addEventListener("click", () => {
        const selectedSize = selectedSizeSelect.value;
        // 여기에서 선택된 타입과 크기를 사용하여 원하는 작업을 수행합니다.
        console.log("선택된 타입:", selectedType);
        console.log("선택된 크기:", selectedSize);
    });
});
