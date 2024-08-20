export default function two_crystal_balls(breaks: boolean[]): number {
    let jmp = Math.floor(Math.sqrt(breaks.length));
    let i = jmp;
    while (!breaks[i] && i < breaks.length) {
        i += jmp;
    }
    i -= jmp;
    for (let j = 0; j < jmp && i < breaks.length; i++, j++) {
        if (breaks[i]) return i;
    }
    return -1;
}
