type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const n = {value: item} as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = n;
            return
        }
        n.next = this.head;
        this.head = n;
    }

    insertAt(item: T, idx: number): void {
        const n = {value: item} as Node<T>;
        if (idx >= this.length) {
            return
        }
        this.length++;
        let current = this.head;
        let previous = this.head;
        for (let i = 0; i < idx; i++) {
            previous = current;
            current = current?.next;
        }
        if (!current || !previous) {
            return undefined
        }
        n.next = current;
        previous.next = n;
    }

    append(item: T): void {
        const n = {value: item} as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = n;
            return
        }
        this.tail.next = n;
        this.tail = n;
    }

    remove(item: T): T | undefined {
        let val: T;
        if (!this.head) {
            return undefined;
        }
        if (item === this.head.value) {
            this.length--;
            val = this.head.value;
            this.head = this.head.next;
            return val;
        }
        let current = this.head;
        let previous = this.head;
        for (let i = 0; i < this.length; i ++) {
            if (current?.value === item) {
                this.length--;
                let val = current.value;
                previous.next = current?.next;
                return val
            }
            if (!current?.next) {
                return undefined;
            }
            previous = current;
            current = current.next;
        }
        return undefined
    }

    get(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (idx >= this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (!current?.next) {
                return undefined;
            }
            current = current.next;
        }
        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (idx >= this.length) {
            return undefined;
        }
        let val: T | undefined;
        if (idx === 0) {
            this.length--;
            val = this.head.value;
            this.head = this.head.next;
            return val;
        } else if (idx === this.length - 1) {
            this.length--;
            val = this.tail?.value;
            return val;
        }
        let current = this.head;
        let previous = this.head;
        for (let i = 0; i < idx; i++) {
            if (!current?.next) {
                return undefined;
            }
            previous = current;
            current = current.next;
        }
        val = current.value;
        previous.next = current.next;
        this.length--;
        return val;
    }
}