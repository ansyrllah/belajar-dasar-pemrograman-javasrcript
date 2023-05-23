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
const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log('Memanaskan air selama 5 detik...');
    setTimeout(() => {
      resolve('Air panas sudah siap!');
    }, 5000);
  });
};

// fungsi penggiling kopi
const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log('Menggiling biji kopi selama 1 detik...');
    setTimeout(() => {
      resolve('Bubuk kopi sudah siap!');
    }, 1000);
  });
};

// fungsi asynchronous pembuat kopi dengan Promise.all pakai async-await
async function makeV6() {
  try {
    // cek kesibukan mesin
    console.log(await checkAvailability());
    // kemudian cek stok bahan
    console.log(await checkStock());
    // contoh penerapan promise all pakai async-await
    // proses boilWater & grindCoffeeBeans dijalankan bersamaan
    // dengan waktu dari fungsi yang terlama
    // urutan output sesuai urutan di array, biarpun lebih lama
    console.log(await Promise.all([boilWater(), grindCoffeeBeans()]));
    // kemudian seduh kopi
    const coffee = await brewCoffee();
    console.log(coffee);
    // kemudian kasih hadiah
    return dessert();
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeV6();
