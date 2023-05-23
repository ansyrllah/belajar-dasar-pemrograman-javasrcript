const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    // mengirim data ketika promise berhasil (pending jadi fulfilled)
    resolve('Kopi berhasil dibuat. Segera diantarkan');
  } else {
    // memberikan alasan kenapa promise tidak terpenuhi (pending jadi rejected)
    reject('Mesin kopi tidak bisa digunakan. Pesan makanan saja');
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};

const coffeePromise = makeCoffee();
const kopiJanji = new Promise(executorFunction);
console.log(coffeePromise);
console.log(kopiJanji);
