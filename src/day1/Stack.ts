type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    public top?: Node<T>;
    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        ++this.length;
        if (this.top) {
            const node = { value: item, next: this.top } as Node<T>;
            this.top = node;
        } else {
            this.top = { value: item } as Node<T>;
        }
    }
    pop(): T | undefined {
        if (!this.top) return undefined;

        --this.length;
        const item = this.top;
        this.top = this.top.next;

        if (this.length === 0) this.top = undefined;

        return item.value;
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}
