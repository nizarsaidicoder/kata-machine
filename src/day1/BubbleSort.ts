export default function bubble_sort(arr: number[]): void {
    for (let n = 0; n != arr.length; ++n) {
        for (let i = 0; i < arr.length - n - 1 ; ++i) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
}
