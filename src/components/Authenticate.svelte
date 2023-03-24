<div class="auth-container">
    <form>
        <h1>Login</h1>
        <label>
            <input type="email" placeholder="email" />
        </label>
        <label>
            <input type="email" placeholder="email" />
        </label>
        <label>
            <input type="email" placeholder="email" />
        </label>
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
        gap: 8px;
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    form input{
        width: 100%;
    }

    h1{
        text-align: center;
    }

   
</style>