/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Rino Kitimbo <https://github.com/KitimboRino>
* @returns {Number}
*/
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
