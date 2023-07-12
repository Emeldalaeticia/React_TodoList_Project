import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo, completed: false }]);
    setTodo('');
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = todoList.filter((val) => val.todoName !== deleteValue);
    setTodoList(restTodoList);
  };

  const toggleComplete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  return (
    <div className='bg-black w-full h-screen flex items-center'>
      <div className='w-[500px] mx-auto text-center bg-teal p-5 rounded-lg'>
        <h1 className='text-5xl font-bold mb-8'>Todo List</h1>
        <form onSubmit={handleForm}>
          <input
            className='border-2 border-black w-full p-3 mb-5 placeholder:text-teal rounded-lg text-black'
            type='text'
            placeholder='Add Todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' className='bg-red text-white py-3 px-8 rounded-lg mb-8'>
            Add Todo
          </button>
        </form>
        <div className='todo-show-area'>
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li
                  key={index}
                  className={`bg-black mb-5 flex justify-between text-white py-2 rounded-lg text-2xl px-5 ${
                    singleTodo.completed ? 'line-through' : ''
                  }`}
                >
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={singleTodo.completed}
                      onChange={() => toggleComplete(index)}
                      className='mr-2'
                      style={{ transform: 'scale(1.5)' }}
                    />
                    {singleTodo.todoName}
                  </label>
                  <span
                    onClick={() => deleteTodo(singleTodo.todoName)}
                    className='text-red-600 cursor-pointer'
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
