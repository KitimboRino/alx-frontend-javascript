/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Rino Kitimbo <https://github.com/KitimboRino>
 * @returns {String}
 */

export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}
