const greet = (name) => {
  let result;
  
  if(name) {
    switch(typeof name) {
      case 'string':
        if(name === name.toUpperCase()) {
          result = greetUpperCase(name);
        } else {
          result = `Hello, ${name}.`;
        }
        break;
      case 'object':
        if(Array.isArray(name)) {
          result = greetArray(name);
        }

        break;
      case 'number':
        break;
      default:
        break;
    }
  } else {
    result = `Hello, my friend.`;
  }

  return result;
}

const stringSplitter = (str) => {
  console.log(str)
  return str.split(', ');
}


const greetArray = (arr) => {
  let greeting = 'Hello';
  let lowerCaseArray = [];
  let upperCaseArray = [];
  
  for(let i = 0; i < arr.length; i++) {
    let splittedMember = stringSplitter(arr[i]);
    if(arr[i] === arr[i].toUpperCase()) {
      upperCaseArray = upperCaseArray.concat(splittedMember);
    } else {
      lowerCaseArray = lowerCaseArray.concat(splittedMember)
    }
  }


  for(let j = 0; j < lowerCaseArray.length; j++) {
    if(lowerCaseArray.length < 3 && (j + 1) === lowerCaseArray.length) {
      greeting += ' ';
    } else {
      greeting += ', ';
    }

    if(j === (lowerCaseArray.length - 1)) {
      greeting += 'and ';
    }

    greeting += lowerCaseArray[j];

    if(j === lowerCaseArray.length - 1) greeting += '.';
  }

  for(let k = 0; k < upperCaseArray.length; k++) {
    if(upperCaseArray.length < 3 && (k + 1) === upperCaseArray.length) {
      greeting += ' ';
    } else {
      greeting += ', ';
    }

    if(k === (upperCaseArray.length - 1)) {
      greeting += 'AND HELLO ';
    }

    greeting += upperCaseArray[k];

    if(k === upperCaseArray.length - 1) greeting += '!';
  }

  return greeting;
}

console.log(greetArray(["Bob", "Charlie, Dianne"]))

const greetUpperCase = (name) => {
  return result = `HELLO ${name}!`;
}

module.exports = {
  greet,
}