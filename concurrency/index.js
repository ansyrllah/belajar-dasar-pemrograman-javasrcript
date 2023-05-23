console.log('Menyalakan mesin kopi');
console.log('Menggiling biji kopi');
console.log('Memanaskan air');
console.log('Mencampurkan air dan kopi');
console.log('Menuangkan kopi ke dalam gelas');
console.log('Menuangkan susu ke dalam gelas');
console.log('Kopi anda sudah siap');

// import object yang sudah di export dari state.js
// const { isCoffeeMachineReadi, stock } = require('./state');
// console.log(isCoffeeMachineReadi);
// import satu nilai
// import stock from './state.js';

// import lebih dari satu nilai
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
console.log(stock);

const makeCoffee = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log(`Kopi ${type} berhasil dibuat!`);
  } else {
    console.log('Biji kopi habis!');
  }
};

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(stock);

makeCoffee('robusta', 8);
// makeCoffee('arabica', 100);
// makeCoffee('arabica', 11);
