export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    for (; lo < hi;) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (haystack[mid] > needle) {
            hi = mid
        } else if (haystack[mid] < needle) {
            lo = mid + 1
        } else {
            return true;
        }
    }
    return false;
}