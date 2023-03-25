<script>
    let email = "";
    let password = "";
    let  confirmPass = "";

</script>

<div class="auth-container">
    <form>
        <h1>Login</h1>
        <!--if email exist then it is above else it will be center-->
        <p class={email ? " above" : " center"}>Email</p>
        <label>
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
        transform: f translateY(-50%);
        pointer-events: none;
        color: white;
        border-radius: 4px;
    }
</style>