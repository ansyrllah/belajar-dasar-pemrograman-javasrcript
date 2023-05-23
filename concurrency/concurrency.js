/**
 * 
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 *

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = (callback, isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        resolve(new NetworkError('Gagal mendapatkan data dari internet'), null);
      } else {
        reject({ name: 'John', age: 18 });
      }
    }, 500);
  });
};

// TODO: 2
// async function gettingUserName() {
//   try {
//     const user = await fetchingUserFromInternet(false).name;
//     // return user.name;
//   } catch (rejectedReason) {
//     console.log(rejectedReason);
//   }
// }
// gettingUserName();

/**
 * Abaikan kode di bawah ini
 

// module.exports = { fetchingUserFromInternet, gettingUserName, NetworkError };
*/

// TODO 1
// Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
// fetchingUserFromInternet:
//  fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
//  fungsi ini menerima dua argumen yakni callback, dan isOffline.
//  Argumen callback membawa dua nilai yakni error dan user:
//   - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
//   - user: data user akan dibawa oleh callback bila isOffline bernilai false.

// const fetchingUserFromInternet = (callback, isOffline) => {
//   setTimeout(() => {
//     if (isOffline) {
//       callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
//     }
//     callback(null, { name: 'John', age: 18 });
//   }, 500);
// };

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// setelah di ubah
// const user = {
//   name: 'John',
//   age: 18,
// };
// const fetchingUserFromInternet = (isOffline) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isOffline) {
//         resolve(new NetworkError('Gagal mendapatkan data dari internet'));
//       } else {
//         reject({ name: 'John', age: 18 });
//       }
//     }, 500);
//   });
// };

// const handleSuccess = (resolveValue) => {
//   console.log(resolveValue);
// };

// const handleFailure = (rejectedReason) => {
//   console.log(rejectedReason);
// };

// const ambilUser = await fetchingUserFromInternet(false).then(handleSuccess).catch(handleFailure);
// .catch(reject => reject)
// console.log(user);
// console.log(ambilUser);

// TODO: 2
// TODO: 2;
//  * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
//  * - Tips:
//  *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
//  *
//  *
//  * Notes:
//  * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
//  * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
//  */
// - gettingUserName:
//  *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
//  *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
//  *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
//  *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
//  *
// versi 1
// const gettingUserName = () => {
//   // try {
//   fetchingUserFromInternet(false)
//     .then((value) => {
//       return value.name;
//     })
//     .catch((rejectedReason) => {
//       console.log(rejectedReason);
//     });

// fetchingUserFromInternet((error, user) => {
//   if (error) {
//     return error.message;
//   }
//   return user.name;
// }, false);
// };

// versi 2: async await
// async function gettingUserName() {
//   try {
//     const getName = await fetchingUserFromInternet(false);
//     return getName.name;
//   } catch (rejectedReason) {
//     return rejectedReason.message;
//   }
// }

// gettingUserName();

// THE FINAL ANSWER
// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        //
        reject(new NetworkError('Gagal mendapatkan data dari internet'));
      } else {
        // resolve disini supaya name bisa didapatkan kalau isOffline: false
        resolve({ name: 'John', age: 18 });
      }
    }, 500);
  });
};

// TODO: 2
async function gettingUserName() {
  try {
    const user = await fetchingUserFromInternet(false);
    return user.name;
  } catch (error) {
    return error.message;
  }
}

const nama = await gettingUserName();
console.log(nama);
