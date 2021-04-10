const encode = function stringToIntegerArray(string, array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string.length; i++) {
    array[i] = alphabet.indexOf(string[i]);
  }
};

const decode = function integerArrayToString(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += alphabet[array[i]];
  }
  return string;
};

(async () => {

  const response = await fetch('caesar.wasm');
  const file = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(file);

  const { memory, caesarEncrypt, caesarDecrypt } = wasm.instance.exports;

  const plaintext = "helloworld";
  const myKey = 3;

  //  We create a typed array which acts as a sort of window into the memory shared between JS and wasm.
  const myArray = new Int32Array(memory.buffer, 0, plaintext.length);

  encode(plaintext, myArray);

  caesarEncrypt(myArray.byteOffset, myArray.length, myKey);


})()