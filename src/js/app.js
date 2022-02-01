// TODO: write your code here

export default function objSort(arr) {
  return arr.sort((prev, next) => next.health - prev.health);
}
