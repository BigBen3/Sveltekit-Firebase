<script>
    let todoList = ['Do the groceries'];
    let currTodo = '';
    let error =  true;
    

    const addToto = () => {
        error = false;
        if(!currTodo){
            error = true;
        }
        todoList.push(currTodo);
    }
</script>


<div class="mainContainer">
    <div class="headerContainer">
        <h1>Todo List</h1>
        <button><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
    </div>
    <main>
       {#each todoList as todo, index }
            <div class="todo">
                {index+1}. {todo} 
            </div>
         
       {/each}
    </main>
    <div class="enterTodo">
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button>ADD</button>
    </div>
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
    
  
    .headerContainer button {
        background: #003c5b;
        color: white;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .headerContainer button i {
        font-size: 1.1rem;
    }

    .headerContainer button:hover {
        opacity: 0.7;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }
    .enterTodo {
        display: flex;
        align-items: stretch;
        border: 1px solid #0891b2;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .enterTodo input {
        background: transparent;
        border: none;
        padding: 14px;
        color: white;
        flex: 1;
    }
    .enterTodo input:focus {
        outline: none;
    }
    .enterTodo button {
        padding: 0 28px;
        background: #003c5b;
        border: none;
        color: cyan;
        font-weight: 600;
        cursor: pointer;
    }
    .enterTodo button:hover {
        background: transparent;
    }
   
</style>