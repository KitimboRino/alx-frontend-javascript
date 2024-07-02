/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Rino Kitimbo <https://github.com/KitimboRino>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
