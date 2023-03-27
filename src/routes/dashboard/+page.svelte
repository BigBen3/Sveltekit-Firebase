<script>
    let todoList = ['Do the groceries'];
    let currTodo = '';
    let error =  false;
   

    const addTodo = () => {
        error = false;
        if(!currTodo){
            error = true;
        }
        todoList = [...todoList, currTodo];
        currTodo = "";
    }
   
    // @ts-ignore
    const editTodo = (index) => {
       
        //make sure you fully understand this I don't right now 

        //if they are not equal add them to the list if they are remove it from the list 
        let newTodoList = todoList.filter((val,  i) => {
            return i !== index;
        })
        //oh I think it is with the binding since bindings is two ways since you set the binding here it now appears in the input 
        currTodo = todoList[index];
        todoList = newTodoList;
    }

    // @ts-ignore
    const removeTodo = (index) => {
  //make sure you fully understand this I don't right now 
        
        //if they are not equal add them to the list if they are remove it from the list 
        let newTodoList = todoList.filter((val,  i) => {
            return i !== index;
        })
        todoList = newTodoList;
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
                <p>
                    {index+1}. {todo} 
                </p>
                <div class="actions">
                    <i on:click={() => {
                        editTodo(index)
                    }}
                    on:keydown={() => {}}
                    class="fa-solid fa-pen"></i>
                    <i  on:click={() => {
                        removeTodo(index)
                    }}
                    on:keydown={() => {}}
                    
                    class="fa-solid fa-trash-can"></i>
                </div>
               
            </div>
         
       {/each}
    </main>
    <div class={"enterTodo " + (error ? "errorBorder" : "")}>
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button on:click={addTodo}>ADD</button>
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

    .todo {
        border-left: 1px solid cyan;
        padding:8px; 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 1.3rem;
    }
    .actions i {
        cursor:pointer;
    }
    .actions i:hover {
        color: coral;
    }
    .errorBorder {
        border-color: coral !important;
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