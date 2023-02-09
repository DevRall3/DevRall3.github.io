<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">

</svelte:head>

<title class="title">Todo App</title>
<div class="home">
    <a href="http://localhost:5173/" class="home">Home</a>
</div>


<script>
    let toDoList = []; // array of ToDos
    let textInput = "";

    function addToDo() {
        toDoList = [...toDoList, { content: textInput, editing: false, checked: false }]
    }

    function setEditing(i, isEditing) {
        toDoList[i].editing = isEditing; // true / false
    }

    function deleteTodo(i) {
        toDoList.splice(i, 1);
        toDoList = toDoList; // https://svelte.dev/tutorial/updating-arrays-and-objects
    }
</script>

<main>
    <div class="main-div" style="margin: 0 auto; padding: 20px; width: 700px;">
        <h2 style="text-align: center;">To-do List</h2>
        <p>Enter your To-do here:</p>
        <div style="display: flex;">
            <input type="text" bind:value={textInput} class="textinputbox">
            <button style="width: 200px;" on:click={addToDo} class="addbutton">Add</button>
        </div>
    </div>
    
    {#each toDoList as toDo, i}
        <div style="display: flex; align-items: baseline; width: 700px; margin: 0 auto;">
            {#if toDo.editing}
                <input type="text" bind:value={toDo.content} class="editing">
            {:else}
                <input type="checkbox" bind:checked={toDo.checked} class="checked">
                <h4 style="flex-grow: 1">{toDo.content}</h4>
            {/if}
            <div style="display: flex">
                {#if toDo.editing}
                    <button on:click={() => setEditing(i, false)} class="savebutton">Save</button>
                {:else}
                    <button on:click={() => setEditing(i, true)} class="editbutton">Edit</button>
                {/if}
                <button on:click={() => deleteTodo(i)} class="deletebutton">Delete</button>
            </div>
        </div>
    {/each}
</main>

<style>
    main {
        background-image: linear-gradient(#2b1055, #7597de);
        height: 100vh;
    }

    div.home {
        background: #2b1055;
    }

    .home {
        padding: 5px;
    }

    h2, p, h4, a{
        color: white;
    }

    .textinputbox, .editing {
        color: white;
    }

    .savebutton, .editbutton, .addbutton, .deletebutton {
        background: none;
        border: none;
        color: white;
    }

    .addbutton:hover, .editbutton:hover, .savebutton:hover, .deletebutton:hover {
        background: white;
        color: #2b1055;
    }

</style>