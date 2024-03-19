export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // Structural check
    if (a === null && b === null) {
        return true;
    }
    // Structural check
    if (a === null || b === null) {
        return false;
    }
    // Value check
    if (a?.value !== b?.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}


function my_compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a?.value != b?.value) {
        return false;
    }
    if ((a?.left === null && b?.left === null) &&
        (a.right === null && b.right === null)) {
        if (a.value === b.value) {
            return true
        }
    }

    let hasLeft: boolean;
    let leftcmp: boolean;
    let hasRight: boolean;
    let rightcmp: boolean;

    if (a?.left != null && b?.left != null) {
        hasLeft = true
        leftcmp = my_compare(a.left, b.left);
    } else {
        hasLeft = false;
        leftcmp = false;
    }

    if (a?.right != null && b?.right != null) {
        hasRight = true
        rightcmp = my_compare(a.right, b.right);
    } else {
        hasRight = false;
        rightcmp = false;
    }

    if ((hasLeft && leftcmp) && (hasRight && rightcmp) ||
        (hasLeft && leftcmp && !hasRight) ||
        (hasRight && rightcmp && !hasLeft)) {
        return true;
    } else {
        return false;
    }
}
