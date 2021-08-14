module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const strNumber = number.toString();
  const arr = Array.from(strNumber);

  let oneToNine = (arg) => {
    let a = arg;
    switch (a) {
      case '1' : 
        a = 'one';
        break;
      case '2' : 
        a = 'two';
        break;
      case '3' : 
        a = 'three';
        break;
      case '4' : 
        a = 'four';
        break;
      case '5' : 
        a = 'five';
        break;
      case '6' : 
        a = 'six';
        break;
      case '7' : 
        a = 'seven';
        break;
      case '8' : 
        a = 'eight';
        break;
      case '9' : 
        a = 'nine';
        break;
      case '0' :
        a = '';
        break;
    }
    return a
  }
  let elevenToNineteen = (arg) => {
    let a = arg;
    switch (a) {
      case '0' : 
        a = 'ten';
        break;
      case '1' : 
        a = 'eleven';
        break;
      case '2' : 
        a = 'twelve';
        break;
      case '3' : 
        a = 'thirteen';
        break;
      case '4' : 
        a = 'fourteen';
        break;
      case '5' : 
        a = 'fifteen';
        break;
      case '6' : 
        a = 'sixteen';
        break;
      case '7' : 
        a = 'seventeen';
        break;
      case '8' : 
        a = 'eighteen';
        break;
      case '9' : 
        a = 'nineteen';
        break;
    }
    return a
  }
  let tenToNinty = (arg) => {
    let a = arg;
    switch (a) {
      case '2' : 
        a = 'twenty';
        break;
      case '3' : 
        a = 'thirty';
        break;
      case '4' : 
        a = 'forty';
        break;
      case '5' : 
        a = 'fifty';
        break;
      case '6' : 
        a = 'sixty';
        break;
      case '7' : 
        a = 'seventy';
        break;
      case '8' : 
        a = 'eighty';
        break;
      case '9' : 
        a = 'ninety';
        break;
      case '0' :
        a = '';
        break;
    }  
    return a  
  } 

  let twoDigitNumber = () => {
    if (arr[arr.length - 2] === '1') {
      return elevenToNineteen(arr[arr.length -1]);
    } else {
      if (oneToNine(arr[arr.length - 1]) === '') {
        return tenToNinty(arr[arr.length - 2]);
      } else if (tenToNinty(arr[arr.length - 2]) === '') {
        return oneToNine(arr[arr.length - 1]);
      } else {
        return `${tenToNinty(arr[arr.length - 2])} ${oneToNine(arr[arr.length - 1])}`;
      }
    }
  }

  if (arr.length === 1) {
    return oneToNine(arr[arr.length - 1]);
  } else if (arr.length === 2) {
    return twoDigitNumber(arr);
  } else {
    if (twoDigitNumber(arr[1]) === '') {
      return `${oneToNine(arr[0])} hundred`;
    } else {
      return `${oneToNine(arr[0])} hundred ${twoDigitNumber(arr[1])}`;
    }
  }
}
