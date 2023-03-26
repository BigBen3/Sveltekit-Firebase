<script>
    let email = "";
    let password = "";
    let  confirmPass = "";
    let error = false;
    let register = false;
    

    const handleAuthenticate = () => {
        if(!email || !password || (register && !confirmPass ) ){
            error = true;
            return;
        }
    }
</script>

<div class="auth-container">
    <form>
        <!--if reigester true make it say register else make it say login -->
        <h1>{register ? "Register" : "Login"}</h1>
        {#if error}
        <p class="error">The information you have entered is not correct</p>
        {/if}
        <label>
            <!--if email exist then it is above else it will be center-->
            <p class={email ? " above" : " center"}>Email</p>
            <input bind:value={email} type="email" placeholder="Email" />
        </label>
        <label>
            <p class={password ? " above" : " center"}>Password</p>
            <input bind:value={password} type="password" placeholder="Password" />
        </label>
        <label>
            <p class={confirmPass ? " above" : " center"}>
                Confirm Password
            </p>
            <input bind:value={confirmPass} type="password" placeholder="Confirm Password" />
        </label>
        <button type="button">Submit</button>
        <div class="options"> 
            <p>Or</p>
            {#if register}
                <div>
                    <p>Already have an account?</p>
                    <p>Login</p>
                </div>
            {:else}
            <div>
                <p>Don't have an account?</p>
                <p>Register</p>
            </div>
            {/if}
        </div>
    </form>
</div>

<style>
    .auth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px;
    } 
    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

   

    h1{
        text-align: center;
        font-size: 3rem;
    }
    
    form label {
        position: relative;
        border: 1px solid blue;
        border-radius: 5px;
    }

    form input { 
        width: 100%;
        border: none;
        background: transparent;
        color: white;
        padding: 14px;
    
    }

    form input:foucs {
        border: none;
        outline: none;
    }

    form label:focus-within {
        border-color: blue;
    }
    form button {
        background:navy;
        color: white;
        border: none;
        padding: 14px 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }

    form button:hover {
        background: blue;
    }

    .above, 
    .center{
        position: absolute;
        transform: translateY(-50%);
        pointer-events: none;
        color: white;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem;
    }

    .above {
        top: 0;
        left: 24px;
        background: navy;
        border: 1px  solid blue;
        font-size: 0.7rem;
    }

    .center {
        top: 50%;
        left: 6px;
        border: 1px solid transparent;
        opacity:  0;
    }
    
    .error {
        color: coral;
        font-size: 0.9rem;
    }

    .options {
        padding: 14px 0;
    
    }
        /* 
        this makes it the first paragraph in the options div
        */
     .options > p {
        position: relative;
     }

     .options > p::after,
     .options > p::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100px;
        height: 1.5px;
        background: white;
     }

     .options > p::after {
        right: 100%;
     }

     
</style>