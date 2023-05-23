// cara buat bikin rantai janji (Chaining Promises)
// object
const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

// fungsi pengecek kesibukan mesin
const checkAvailability = () => {
  console.log('\tmengecek kesibukan mesin...(tunggu 1 detik)');
  return new Promise((resolve, reject) => {
    // dijeda 1 detik
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve('Mesin kopi siap digunakan');
      } else {
        reject('Maaf, mesin sedang sibuk');
      }
    }, 1000);
  });
};

// fungsi pengecek stok bahan
function checkStock() {
  console.log('\tmengecek stok...(tunggu 1,5 detik)');
  return new Promise((resolve, reject) => {
    // dijeda 1,5 detik
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve('Stok cukup. Bisa membuat kopi');
      } else {
        reject('Stok tidak cukup!');
      }
    }, 1500);
  });
}

// fungsi hadiah makanan penutup
function dessert() {
  console.log('\tSelamat menikmati, makanan penutup menyusul dalam 3 detik');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Makanan penutup sudah datang!');
    }, 3000);
  });
}

// fungsi penyeduh kopi
const brewCoffee = () => {
  console.log('Membuatkan kopi Anda... tunggu 2 detik');
  return new Promise((resolve, reject) => {
    // dijeda 2 detik
    setTimeout(() => {
      resolve('Kopi sudah siap!');
      // reject('\tselamat menikmati');
    }, 2000);
  });
};

// fungsi memanaskan air
// boilWater adalah Promise
const boilWater = new Promise((resolve, reject) => {
  console.log('Memanaskan air selama 5 detik...');
  setTimeout(() => {
    resolve('Air panas sudah siap!');
  }, 5000);
});

// fungsi penggiling kopi
// grindCoffeBeans bukan Promise, tapi mengembalikan Promise
const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log('Menggiling biji kopi selama 1 detik...');
    setTimeout(() => {
      resolve('Bubuk kopi sudah siap!');
    }, 1000);
  });
};

// fungsi pembuat kopi
function makeV6() {
  // cek kesibukan mesin
  checkAvailability()
    .then((value) => {
      console.log(value);
      // kemudian cek stok bahan
      return checkStock();
    })
    // contoh penerapan promise all
    .then((value) => {
      console.log(value);
      // proses boilWater & grindCoffeeBeans dijalankan bersamaan
      // dengan waktu dari fungsi yang terlama
      // urutan output sesuai urutan di array, biarpun lebih lama
      const promises = [boilWater, grindCoffeeBeans()];
      // atau
      // const promises = [boilWater, grindCoffeeBeans()];
      // return Promise.all([boilWater, grindCoffeeBeans]);
      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value);
      // kemudian seduh kopi
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      return dessert();
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    });
}

makeV6();
