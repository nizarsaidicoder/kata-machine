export default function quick_sort(arr: number[]): void {
    qsort(arr, 0, arr.length - 1);
}

function swap(arr: number[], i: number, j: number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function qsort(arr: number[], start: number, end: number) {
    if (start < end) {
        const new_p = partition(arr, start, end);
        qsort(arr, start, new_p - 1);
        qsort(arr, new_p + 1, end);
    }
}

function partition(arr: number[], start: number, end: number): number {
    const pivot = arr[end];
    let idx = start - 1;
    for (let i = start; i < end; ++i) {
        if (arr[i] <= pivot) {
            ++idx;
            swap(arr, i, idx);
        }
    }
    ++idx;
    swap(arr, end, idx);
    return idx;
}
