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
    // Filter set values that start with startString and map them to the trimmed substring
    const filteredValues = [...set]
      .filter(value => value.startsWith(startString))
      .map(value => value.substring(startString.length).trim());
    
    // Join filtered values with '-'
    return filteredValues.join('-');
  }
  