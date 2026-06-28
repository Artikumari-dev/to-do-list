import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [Todos, setTodos] = useState([{task: "sample-task" , id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
            
        });
        

    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
        
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            });
        });
    };



    return (
       <div className="max-w-md mx-auto mt-10 p-6 bg-white ">
    <input 
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue} 
        className=" p-2 border border-gray-500 rounded"
    />
    <br />
    <button onClick={addNewTask} className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Task
    </button>
    <br /><br /><br />

    <hr/>
    <h1 className="text-2xl font-semibold mb-4">Tasks Todo</h1>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
       {
        Todos.map((todo) => (
            <li key = {todo.id}>
                <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                    {todo.task}
                </span>
                <button onClick={() => deleteTodo(todo.id)} className=" ml-4 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                <button onClick={() => markAsDone(todo.id)} 
                className=" ml-4 mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Mark As Done</button>
            </li>

        ))
       }
    </ul>
</div>

    )
}

