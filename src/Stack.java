import java.util.ArrayList;
import java.util.EmptyStackException;
import java.util.List;

public class Stack {
    private List<Object> stackList;

    public Stack() {
        this.stackList = new ArrayList<>();
    }

    public void push(Object item) {
        stackList.add(item);
    }

    public void pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        stackList.remove(stackList.size() - 1);
    }

    public void peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        Object top = stackList.get(stackList.size() - 1);
        System.out.println("Top element: " + top);
    }

    public boolean isEmpty() {
        return stackList.isEmpty();
    }

    public void printStack() {
        if (isEmpty()) {
            System.out.println("Stack is empty.");
        } else {
            System.out.print("Stack: ");
            for (Object item : stackList) {
                System.out.print(item + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Stack myStack = new Stack();

        myStack.push(1);
        myStack.push(2);
        myStack.push(3);

        myStack.printStack();

        myStack.pop();

        myStack.printStack();

        myStack.peek();
    }
}
