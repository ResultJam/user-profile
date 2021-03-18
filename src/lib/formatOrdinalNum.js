/*
    Format ordinal numbers in English; 1st, 2nd, 3rd, 4th, etc.
*/

export default function formatOrdinalNum(num) {
    if (!num) return null;

    const finalDigit = num % 10
    switch (finalDigit) {
        case 1:
            return `${num}st`
        case 2:
            return `${num}nd`
        case 3:
            return `${num}rd`
        default:
            return `${num}th`
  }
}
