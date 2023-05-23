const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  /* Kondisi awal promise adalah pending. Lalu ada 2 kemungkinan kejadian
  fulfilled atau rejected. Jika fulfilled fungsi resolve akan dijalankan
  jika rejected fungsi reject akan dijalankan*/
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 300 && stock.water >= 250) {
      resolve('Stok cukup. Bisa membuat kopi');
    } else {
      reject('Stock tidak cukup');
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkStock().then(handleSuccess, handleFailure);
checkStock();
// console.log(checkStock());
