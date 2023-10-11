//스택 추가
export const pushClick = (inputValue, stackState, selectedSize, updateStackState) => {
    if (inputValue.value === null || inputValue.value === '') {
        return;
    }
    if (stackState.value.length >= selectedSize) {
        alert("더이상 입력하실수 없습니다.");
        return;
    }
    const pushMessage = `입력: ${inputValue.value}`;
    stackState.value.push(inputValue.value);
    updateStackState(pushMessage);
    inputValue.value = '';
};

//팝업 추출
export const popClick = (stackState, popValue, updateStackState) => {
    if (stackState.value.length > 0) {
        const poppedValue = stackState.value.pop();
        popValue.value = poppedValue;
        updateStackState(`추출: ${poppedValue}`);
    } else {
        popValue.value = '';
        alert("마지막추출입니다.");
    }
};

//스택이미지 초기화
export const resetStack = (routes) => {
    routes.push({
        path: '/',
    });
};

export function pageData(routes, selectedType, selectedSize) {
  routes.push({
            path: '/InputPop',
            query: {
                selectedType,
                selectedSize,
            },
        });
    }