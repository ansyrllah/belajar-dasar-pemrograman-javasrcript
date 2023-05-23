// fungsi asynchronous
const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve('Kopi didapatkan!');
      } else {
        reject('Biji kopi habis!');
      }
    }, 1000);
  });
};

// keyword async untuk memberitahu javascript supaya fungsi makeCoffee() dijalankan secara asynchronous
// keyword await untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan promise resolve. tanpa ini, fungsi makeCoffee akan mengembalikan promise pending
// untuk mengembalikan promise reject bisa dihandle dengan try catch

async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    // tanpa await, Promise getCoffee akan bernilai <pending>
    console.log(coffee);
  } catch (rejectedReason) {
    // penanganan onRejected
    console.log(rejectedReason);
  }
}
makeCoffee();
