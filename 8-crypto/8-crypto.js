function crypto(password) {
  const chars = password.split("");

  if (chars.length >= 8) {
    const temp = [...chars];

    chars[0] = temp[2]; // s
    chars[1] = temp[3]; // s
    chars[2] = temp[1]; // a
    chars[3] = temp[0]; // p
    chars[4] = temp[7]; // d
    chars[5] = temp[5]; // o
    chars[6] = temp[6]; // r
    chars[7] = temp[4]; // w
  }

  return chars.join("");
}

function check(encrypted, original) {
  const chars = encrypted.split("");

  if (chars.length >= 8) {
    const temp = [...chars];

    chars[0] = temp[3]; // p
    chars[1] = temp[2]; // a
    chars[2] = temp[0]; // s
    chars[3] = temp[1]; // s
    chars[4] = temp[7]; // w
    chars[5] = temp[5]; // o
    chars[6] = temp[6]; // r
    chars[7] = temp[4]; // d
  }

  return chars.join("") === original;
}

console.log(crypto("password")); // 'ssapdorw'
console.log(check("ssapdorw", "password")); // true
console.log(check("ssapdorw", "wrong")); // false
