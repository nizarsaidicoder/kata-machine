type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const item = this.head;
        this.head = this.head.next;

        if (this.length === 0) this.head = this.tail = undefined;

        return item.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
