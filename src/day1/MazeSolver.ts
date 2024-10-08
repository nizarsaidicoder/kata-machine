// Base Case :
//  - Wall
//  - Off the map
//  - Endpoint
//  - already seen it

// Recursion
//  - Pre-recurse :
//      -
//      -
//  - Post-recurse :
//      -
//      -
type Point = {
    x: number;
    y: number;
};
const offsets: Point[] = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
];
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (maze[curr.y][curr.x] === wall) return false;
    if (seen[curr.y][curr.x]) return false;
    if (
        curr.x >= maze[0].length ||
        curr.x < 0 ||
        curr.y >= maze.length ||
        curr.y < 0
    )
        return false;

    if (curr.x == end.x && curr.y == end.y) {
        path.push(end);
        return true;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);
    for (const offset of offsets) {
        const next: Point = {
            x: curr.x + offset.x,
            y: curr.y + offset.y,
        };
        if (walk(maze, wall, next, end, seen, path)) return true;
    }
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let y = 0; y < maze.length; ++y) {
        seen.push([]);
        for (let x = 0; x < maze[0].length; ++x) {
            seen[y][x] = false;
        }
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}

const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];

const mazeResult = [
    { x: 10, y: 0 },
    { x: 10, y: 1 },
    { x: 10, y: 2 },
    { x: 10, y: 3 },
    { x: 10, y: 4 },
    { x: 9, y: 4 },
    { x: 8, y: 4 },
    { x: 7, y: 4 },
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
    { x: 3, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
];

console.log(solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 }));
