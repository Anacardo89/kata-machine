function partition(arr: number[], lo: number, hi: number): number {
    let p = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= p) {
            idx++;
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = p;
    return idx;
}

function sort(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    let pidx = partition(arr, lo, hi)
    sort(arr, lo, pidx - 1);
    sort(arr, pidx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}