<script>
    //we have this in the layout so all the pages inherit this
    import {onMount}  from 'svelte';
    import  {auth, db} from  '../lib/firebase/firebase';
    
    const nonAuthRoutes = ['/', 'product']

    onMount( () => {
        console.log('Mounting');
        const unsusbribe = auth.onAuthStateChanged(async user => {
            const currentPath = window.location.pathname

            // @ts-ignore
            if (!user  && !nonAuthRoutes.includes(currentPath)){
                window.location.href = "/";
            }

        } )
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