module.exports = function toReadable(number) {
  const oneNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const numberStr = number.toString();
  const numberLength = numberStr.length;

  let positionZero = '';
  let positionOne = '';
  let positionTwo = '';

  if (numberLength === 3) {
    const d0 = parseInt(numberStr[0], 10);
    const d1 = parseInt(numberStr[1], 10);
    const d2 = parseInt(numberStr[2], 10);

    positionZero = `${oneNumber[d0]} hundred`;
    if (d1 !== 1 && d2 !== 0) {
      positionTwo = `${oneNumber[d2]}`;
    }

    if (d1 === 6 || d1 === 7 || d1 === 9) {
      positionOne = `${oneNumber[d1]}ty`;
    } else if (d1 === 2) {
      positionOne = 'twenty';
    } else if (d1 === 3) {
      positionOne = 'thirty';
    } else if (d1 === 4) {
      positionOne = 'forty';
    } else if (d1 === 5) {
      positionOne = 'fifty';
    } else if (d1 === 8) {
      positionOne = 'eighty';
    } else if (d1 === 1) {
      if (d2 === 0) {
        positionTwo = 'ten';
      } else if (d2 === 1) {
        positionTwo = 'eleven';
      } else if (d2 === 2) {
        positionTwo = 'twelve';
      } else if (d2 === 3) {
        positionTwo = 'thirteen';
      } else if (d2 === 5) {
        positionTwo = 'fifteen';
      } else if (d2 === 8) {
        positionTwo = 'eighteen';
      } else {
        positionTwo = `${oneNumber[d2]}teen`;
      }
    } else if (d1 === 0 && d2 !== 0) {
      return `${positionZero} ${positionTwo}`.trim();
    } else if (d1 === 0 && d2 === 0) {
      return `${positionZero}`.trim();
    }
    return `${positionZero} ${positionOne} ${positionTwo}`
      .trim()
      .replace(/\s+/g, ' ');
  }
  if (numberLength === 2) {
    const d0 = parseInt(numberStr[0], 10);
    const d1 = parseInt(numberStr[1], 10);
    if (d0 !== 1 && d1 !== 0) {
      positionOne = `${oneNumber[d1]}`;
    }
    if (d0 === 1) {
      if (d1 === 0) {
        positionOne = 'ten';
      } else if (d1 === 1) {
        positionOne = 'eleven';
      } else if (d1 === 2) {
        positionOne = 'twelve';
      } else if (d1 === 3) {
        positionOne = 'thirteen';
      } else if (d1 === 5) {
        positionOne = 'fifteen';
      } else if (d1 === 8) {
        positionOne = 'eighteen';
      } else {
        positionOne = `${oneNumber[d1]}teen`;
      }
    } else if (d0 === 2) {
      positionZero = 'twenty';
    } else if (d0 === 3) {
      positionZero = 'thirty';
    } else if (d0 === 4) {
      positionZero = 'forty';
    } else if (d0 === 5) {
      positionZero = 'fifty';
    } else if (d0 === 8) {
      positionZero = 'eighty';
    } else {
      positionZero = `${oneNumber[d0]}ty`;
    }
    return `${positionZero} ${positionOne}`.trim();
  }
  if (numberLength === 1) {
    const d0 = parseInt(numberStr[0], 10);
    positionZero = `${oneNumber[d0]}`;
    return `${positionZero}`;
  }
  return '';
};
