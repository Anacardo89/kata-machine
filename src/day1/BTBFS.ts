function search(q: BinaryNode<number>[], needle: number): boolean {
    if (q[0].value === needle) {
        return true;
    }
    if (q[0].left) {
        q.push(q[0].left);
    }
    if (q[0].right) {
        q.push(q[0].right);
    }
    q.shift();
    return false;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];
    while (q.length) {
        if (search(q, needle)) {
            return true;
        }
    }
    return false;
}