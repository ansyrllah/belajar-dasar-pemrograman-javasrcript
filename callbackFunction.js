// awal fungsi synchronous
const orderCoffee = () => {
  let coffee = null;
  console.log('Sedang membuat kopi, silakan tunggu');
  // awal asynchronous
  setTimeout(() => {
    coffee = 'Kopi sudah jadi!';
  }, 3000);
  // akhir asynchronous

  return coffee;
  // nilai return akan selalu null karena
};
// akhir fungsi synchronous

const coffee = orderCoffee();
console.log(coffee);
