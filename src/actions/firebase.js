import firebase from 'firebase';

// const User = DB.auth().currentUser.uid;
// const userMain = DB.ref(`${User}/sources/main`);
// const userSports = DB.ref(`${User}/sources/sports`);

export const fetchUserSources = (uid) => {
  const user = firebase.database().ref(uid);

  if(uid){
    return (dispatch) => {

      user.once('value').then((snapshot) => {

        let userSources = snapshot.val().sources;

        let pickedSources = Object.assign({}, userSources);

        console.log(pickedSources);

        dispatch({
          type: 'LOAD_USER_SOURCES',
          pickedSources
        });

      });
    };
  }
};

// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// function fetchAllSources() {
//   return (dispatch, getState) => {
//     let fetchedExpenses = [];
//
//     firebaseExpenses.once('value').then(result => {
//       result.forEach(expense => {
//         fetchedExpenses.push(expense.val());
//       });
//
//       dispatch({
//         type: 'RECEIVE_ALL_EXPENSES',
//         expenses: fetchedExpenses
//       });
//     });
//   }
// }
//
// function submitNewExpense(expenseData) {
//   return (dispatch) => {
//
//     // create a new unique key to store our expense data under
//     let newExpenseKey = firebaseExpenses.push().key;
//
//     // Upload our receipt image file to the firebase storage bucket
//     // Get the image URL once it's uploaded and save it along with
//     // the rest of the expense data
//     firebaseImages.child(expenseData.receipt.name).put(expenseData.receipt).then(result => {
//
//       // Change the value of `expenseData.receipt` to the image URL
//       // instead of the entire file. Saving just the URL allows us
//       // to use it in the <img> tag in our component
//       expenseData.receipt = result.downloadURL;
//
//       // Add a new child to our expenses array in firebase and set
//       // it equal to the `expenseData` object
//       firebaseExpenses.child(newExpenseKey).set(expenseData)
//       .then(() => {
//         dispatch({
//           type: 'RECEIVE_NEW_EXPENSE',
//           expense: expenseData
//         });
//       })
//       .catch(error => {
//         console.log("Error saving expense: ", error);
//       });
//
//     });
//   };
// }
