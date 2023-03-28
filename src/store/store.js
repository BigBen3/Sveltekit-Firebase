// @ts-ignore
// @ts-ignore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase";

//default data in the store

 export const authStore = writable ({ 
    user: null,
    loading: true,
    data: {}
      
 })

 export const authHandlers = {
    // @ts-ignore
    //also what is authHandler how are you able to assign it three functions? 
    //how does this work you can use : to assing functions 
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth,  email, pass)
    },
   // @ts-ignore
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    }, 
    logout:  async () => {
        await signOut(auth)
    }
}