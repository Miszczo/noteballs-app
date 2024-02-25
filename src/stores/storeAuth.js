import { defineStore } from 'pinia';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '@/js/firebase';

export const useStoreAuth = defineStore('storeAuth', {
    state: () => ({
        user: {},
    }),
    actions: {
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    this.router.push('/');
                    console.log('user logged in', user);
                } else {
                    this.user = {};
                    this.router.replace('/auth');
                    console.log('user logged out', user);
                }
            });
        },
        registerUser(credentials) {
            createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
                .then((userCredential) => {
                    const user = credentials.user;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        loginUser(credentials) {
            signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        logoutUser() {
            signOut(auth)
                .then(() => {
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
    },
});
