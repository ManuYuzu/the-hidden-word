export function hiddenWord(num:number) {

  // Posibility 1
  return num
    .toString()
    .replace(/6/gi, 'a')
    .replace(/1/gi, 'b')
    .replace(/7/gi, 'd')
    .replace(/4/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/2/gi, 'l')
    .replace(/9/gi, 'm')
    .replace(/8/gi, 'n')
    .replace(/0/gi, 'o')
    .replace(/5/gi, 't')

    // Posibility 2
    /*
    let keys = {
      '6':'a',
      '1':'b',
      '7':'d',
      '4':'e',
      '3':'i',
      '2':'l',
      '9':'m',
      '8':'n',
      '0':'o',
      '5':'t'
    }

    return num.toString().split('').map(value => keys[value]).join('')
    */
}