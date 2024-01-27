<script>
	let name = 'ToDoList App';
	let tasks = [];
	let completed = [];
	let noOfTasks = 0;
	
	function handleSubmit(e){
		e.preventDefault();
		const formData = new FormData(e.target);
		const task = formData.get('todo');
		if(task.trim().length > 0){
			tasks.push(task)
			tasks = tasks;
			noOfTasks++;
			e.target.reset();
			console.log(tasks)
		} else {
			alert("Please enter text");
		}
	}
</script>

<h1>Welcome to {name}!</h1>
<div>
	<form id="todoForm" on:submit={handleSubmit}>
		<label for="todo">Enter todo:</label>
		<input 
			id="todo"
			type="text"
			placeholder="eg. Bring eggs"
			name="todo"
			value=""
		/>
		<button type="submit">ADD</button>
	</form>
	<div>
	{#if noOfTasks === 0}
		<p>Empty List :)</p>
	{:else}
		<ul>
		{#each tasks as task, i}
			<li>
			<div style={'display:flex'}>
			<p>{task}</p>
			<button on:click={() => {
					completed.push(task); 
					completed = completed;
					tasks.splice(i, 1); 
					tasks = tasks
					}} 
					key=i>
				✅
				</button>
				<button on:click={() => {
					tasks.splice(i, 1);
					tasks = tasks
					console.log(tasks)
				}} >
				🗑️
				</button>
				<button on:click={() => {
				var updateTask = prompt("Update Task ");
				tasks[i] = updateTask;
				tasks = tasks;
				console.log(tasks)
				}}>
				✏️
				</button>
			</div>
		{/each}
		</ul>
	{/if}
    <p>Completed: {completed.length}</p>
    <p>Total: {tasks.length}</p>
	<ul>
    {#each completed as task}
    <li>
	<button on:click={
    () => {
		tasks.push(task);
		tasks = tasks;
		completed.splice(completed.indexOf(task), 1);
    completed = completed
    }}><strike>{task}</strike></button>
	</li>
    {/each}
	</ul>
	</div>
</div>

<style>
    h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="text"] {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #f0f0f0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
    }

    .completed-task {
        text-decoration: line-through;
    }

    .button-container {
        display: flex;
    }

    .button-container button {
        margin-right: 10px;
    }
</style>
