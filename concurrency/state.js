const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};
const isCoffeeMachineReady = true;

// module.exports = {coffeeStock, isCoffeeMachineReady};
// console.log(module);

// export satu nilai
// export default coffeeStock;

// export lebih dari satu nilai
export { coffeeStock, isCoffeeMachineReady };
