function generateCodes(name, existingCodes) {
  const baseCode = name.substring(0, 3).toUpperCase();
  const codes = [baseCode];

  for (let i = 1; i < 3; i++) {
    let newCode = baseCode;

    // Add a random letter to the base code until a unique code is generated
    while (codes.includes(newCode)) {
      const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      newCode = baseCode.substring(0, i) + randomLetter;
    }

    codes.push(newCode);
  }

  // Filter out any existing codes to ensure that the generated codes are unique
  return codes.filter(code => !existingCodes.includes(code));
}

function generateArray(codes, name) {
  let arr = [];
  let code = "";
  while (arr.length < 3) {
    for (let i = 0; i < 3; i++) {
      code += name[Math.floor(Math.random() * name.length)];
    }
    if (!codes.includes(code)) {
      arr.push(code);
      codes.push(code);
    }
    code = "";
  }
  return arr;
}

function generateCodes(name) {
  let codes = [];
  let letters = name.split("");
  let firstLetter = letters[0];
  for (let i = 0; i < 3; i++) {
    let code = firstLetter + letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];
    if (!codes.includes(code)) {
      codes.push(code);
    } else {
      i--;
    }
  }
  return codes;
}
