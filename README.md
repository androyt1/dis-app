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
