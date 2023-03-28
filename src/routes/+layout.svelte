<script>
// @ts-nocheck



    //we have this in the layout so all the pages inherit this
    import {onMount}  from 'svelte';
    import  {auth, db} from  '../lib/firebase/firebase';
    import  { getDoc, doc, setDoc} from 'firebase/firestore';
    import {authStore} from '../store/store'
    const nonAuthRoutes = ['/', 'product']

    onMount( () => {
        console.log('Mounting');
        const unsusbribe = auth.onAuthStateChanged(async user => {
            const currentPath = window.location.pathname;

            // @ts-ignore
            if (!user  && !nonAuthRoutes.includes(currentPath)){
                window.location.href = "/";
                return
            }

            if(user && currentPath === '/'){
                window.location.href = "/dashboard";
                return;

            }

            if(!user){
                return;
            }

                // @ts-ignore
                let dataToSetStore
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                if(!docSnap.exists()) {
                    const userRef = doc(db, 'user', user.uid);  
                    dataToSetToStore = {
                        email: user.email,  
                        todos: [],
                    }
                    await setDoc(
                        userRef,  dataToSetToStore, { merge: true}
                    );
                }
                else {
                    const userData = docSnap.data()
                    dataToSetStore = userData;
                }

                authStore.update(curr => {
                    return {
                        ...curr,
                        user,
                        data: dataToSetStore,
                        loading: false,
                    };
                })
        } );
    }

    )

</script>


<div class="mainContainer">
    <slot />
</div>


<style>
    .mainContainer{ 
        min-height: 100vh;
        background: linear-gradient(to right, #000428, #000046);
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>