import * as firebase from 'firebase';

const firebaseAuth = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(Error('unauthorized'));
        }
      });
    });
  },
  getToken: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user.getIdToken().then(token => token));
        } else {
          reject(Error('unauthorized'));
        }
      });
    });
  }
}

export default firebaseAuth;
