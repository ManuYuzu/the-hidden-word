export const MIN = 100
export const MAX = 999999

export function hiddenWord(input:number) {
  const valuesInRange = (input > MIN && input < MAX)

  if (!valuesInRange) {
    throw new Error('The input is not valid')
  }

  return input
    .toString()
    .replace(/6/g, 'a')
    .replace(/1/g, 'b')
    .replace(/7/g, 'd')
    .replace(/4/g, 'e')
    .replace(/3/g, 'i')
    .replace(/2/g, 'l')
    .replace(/9/g, 'm')
    .replace(/8/g, 'n')
    .replace(/0/g, 'o')
    .replace(/5/g, 't')
}