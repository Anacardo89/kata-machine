export default class ArrayList<T> {
    public length: number;
    private cap: number;
    private arr: Array<T>;
    
    constructor(cap: number) {
        this.length = 0;
        this.cap = cap;
        this.arr = new Array(cap);
    }

    grow(): void {
        this.cap = this.cap*2;
        const arr = new Array(this.cap);
        for (let i = 0; i < this.length; i++) {
            arr[i] = this.arr[i];
        }
        this.arr = arr;
    }

    prepend(item: T): void {
        if (this.length === this.cap) {
            this.grow();
        }
        this.length++;
        for (let i = this.length-1; i > 0; i--) {
            this.arr[i] = this.arr[i-1];
        }
        this.arr[0] = item;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }
        if (this.length === this.cap) {
            this.grow();
        }
        if (idx === this.length) {
            this.arr[idx] = item;
            this.length++;
            return;
        }
        for (let i = this.length-1; i >= idx; i--) {
            this.arr[i+1] = this.arr[i];
        }
        this.arr[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.cap) {
            this.grow();
        }
        this.arr[this.length] = item
        this.length++;
    }

    remove(item: T): T | undefined {
        let idx = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === item){
                idx = i;
            }
        }
        if (idx < 0) {
            return undefined;
        }
        const ret = this.arr[idx];
        for (let i = idx; i < this.length-1; i++) {
            this.arr[i] = this.arr[i+1];
        }
        this.length--;
        return ret;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length-1) {
            return undefined;
        }
        return this.arr[idx]
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length-1) {
            return undefined;
        }
        const ret = this.arr[idx];
        for (let i = idx; i < this.length-1; i++) {
            this.arr[i] = this.arr[i+1];
        }
        this.length--;
        return ret;
    }
}