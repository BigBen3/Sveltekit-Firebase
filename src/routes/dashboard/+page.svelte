<script>
  import { db } from "$lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
  import  { getDoc, doc, setDoc, setIndexConfiguration} from 'firebase/firestore';
  import TodoItem from "../../components/TodoItem.svelte";

    /**
   * @type {any[]}
   */
    let todoList = [];
    authStore.subscribe((curr) => {
        // @ts-ignore
        todoList = curr.data.todos;
    });
    let currTodo = '';
    let error =  false;
   

    const addTodo = () => {
        error = false;
        if(!currTodo){
            error = true;
        }
        /* 
        For example, if todoList initially contained the elements 
        ["task1", "task2", "task3"], and currTodo is "task4", 
        the expression todoList = [...todoList, currTodo] 
        would create a new array ["task1", "task2", "task3", "task4"] and assign it to the todoList variable.
        */
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
    async function saveTodos() {
        try {
            // @ts-ignore
            const userRef = doc(db, "users", $authStore.user.uid);
            await setDoc(
                userRef,
                {
                    todos: todoList,
                },
                { merge: true }
            );
        } catch (err) {
            console.log("There was an error saving your information");
        }
    }
</script>
<!--this makes sure that it doesn't load anything until the loading is false for the authentication -->
{#if  !$authStore.loading} 

<div class="mainContainer">
    <div class="headerContainer">
        <h1>Todo List</h1>
        <div class="headerBtns">
            <button on:click={saveTodos}><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
            <button on:click={authHandlers.logout}><i class="fa-solid fa-right-from-bracket" /><p>Logout</p></button>
        </div>
    
    </div>
    <main>
        {#if todoList.length === 0}
            <p>You have nothing to do !</p>
        {/if}
       {#each todoList as todo, index }

       <TodoItem {todo} {index} {removeTodo} {editTodo} />
         
       {/each}
    </main>
    <!--if the error is true make it errorBorder else make add emtpy string I think-->
    <div class={"enterTodo " + (error ? "errorBorder" : "")}>
        <!--since it is double binding for the currTodo when you set the value of it in the editTodo it appears in the input tag-->
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button on:click={addTodo}>ADD</button>
    </div>
</div>
{/if}
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
    
    .headerBtns {
        display: flex;
        align-items: center;
        gap: 14px;
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