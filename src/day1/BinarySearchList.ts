export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (low < high) {
        const mid = calc_mid(high, low);
        if (haystack[mid] === needle) return true;
        haystack[mid] < needle ? (low = mid + 1) : (high = mid);
    }
    return false;
}

function calc_mid(high: number, low: number) {
    return Math.floor(low + (high - low) / 2);
}
