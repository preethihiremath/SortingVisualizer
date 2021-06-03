export function swap(array, a, b) {
    let c = array[a];
    array[a] = array[b];
    array[b] = c;
    return array;
} 