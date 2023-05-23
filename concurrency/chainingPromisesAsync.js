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
        // resolve('Stok cukup. Bisa membuat kopi');
        resolve(state);
      } else {
        reject('Stok tidak cukup!');
      }
    }, 1500);
  });
}

// fungsi salam penutup
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
  console.log('Membuatkan kopi Anda... (tunggu 2 detik');
  return new Promise((resolve, reject) => {
    // dijeda 2 detik
    setTimeout(() => {
      resolve('Kopi sudah siap!');
      // reject('\tselamat menikmati');
    }, 2000);
  });
};

// fungsi asynchronous pembuat kopi pakai fitur async-awail
async function makeV6() {
  try {
    // cek kesibukan mesin
    const availability = await checkAvailability();
    console.log(availability);
    const cek = await checkStock();
    console.log(cek.stock);
    // // atau
    // await checkAvailability();
    // await checkStock();
    // await brewCoffee();
    console.log(await brewCoffee());
    // console.log(coffee);

    // const coffee = await brewCoffee();
    // console.log(coffee); atau sama aja dengan yg dibawah
    // console.log(await brewCoffee());
    // console.log(await dessert());
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeV6();
