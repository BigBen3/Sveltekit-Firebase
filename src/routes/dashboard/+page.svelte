<div class="mainContainer">
    <div class="headerContainer">
        <h1>Todo List</h1>
        <button>Save</button>
    </div>
    <main>
        <div class="enterTodo">
            <input type="texst" placeholder="Enter todo"/>
            <button>ADD</button>
        </div>
    </main>
</div>

<style>
    .mainContainer {
        display: flex;
        flex-direction:column;
        min-height: 100vh;
        gap: 24px;
        padding: 24px;
    }

    .headerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .enterTodo {
        display: flex;
        align-items:  stretch;
    }

    
    .enterTodo input{
        background: transparent;
        border: none;
        padding: 14px;
        color: white;
        flex: 1;
    }
    
    .enterTodo input:focus{
        outline: none;
    }
    
</style>