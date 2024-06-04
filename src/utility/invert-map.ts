export function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
    const newMap = new Map<V, K>();

    for (const entry of map.entries()) {
        newMap.set(entry[1], entry[0]);
    }

    return newMap;
}