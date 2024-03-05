type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private top?: Node<T>;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.top) {
            this.top = node
            return
        }
        node.prev = this.top;
        this.top = node;
    }

    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }
        this.length--;
        const top = this.top;
        this.top = this.top.prev;
        return top.value;
    }

    peek(): T | undefined {
        if (!this.top) {
            return undefined;
        }
        return this.top.value;
    }
}