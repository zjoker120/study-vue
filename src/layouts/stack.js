class Stack {
    constructor() {
        this.items = [];
    }

    // 스택에 요소를 추가하는 메서드
    push(element) {
        this.items.push(element);
    }

    // 스택에서 가장 위의 요소를 제거하고 반환하는 메서드
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // 스택의 가장 위에 있는 요소를 반환하는 메서드
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // 스택이 비어있는지 확인하는 메서드
    isEmpty() {
        return this.items.length === 0;
    }

    // 스택의 크기를 반환하는 메서드
    size() {
        return this.items.length;
    }

    // 스택의 모든 요소를 문자열로 반환하는 메서드
    toString() {
        return this.items.toString();
    }

    // 스택을 초기화하는 메서드
    clear() {
        this.items = [];
    }
}

// 스택 사용 예시
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.toString()); // 1, 2
stack.clear();
console.log(stack.isEmpty()); // true
