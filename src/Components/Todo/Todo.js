import React, { useState } from 'react';
import useTodos from '../useTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {

    const [todoData, setTodoData] = useState({
        name: '',
        description: ''
    })
    const [todos, setTodos] = useTodos()
    // const [linethrough,setLineThrough] = useState(todos)




    const nameSubmit = (e) => {
        setTodoData({ ...todoData, name: e.target.value })
    }
    const descriptionSubmit = (e) => {
        setTodoData({ ...todoData, description: e.target.value })
    }




    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5000/todo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ todoData }),
        })
            .then(res => res.json())
            .then(data => alert('successfuly data added'))

        e.target.reset();

    }

    const deleteTodo = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log('done'))
    }

    const taskCompleted = (name) => {
        // e.preventDefault();
        //let's find index of element
        // const element = todos.findIndex((elem) => elem._id == id);
        toast.success(`${name} todo successfully completed`)
    
        //copy array into new variable
        // const newTodos = [...todos];
    
        //edit our element
        // newTodos[element] = {
        //   ...newTodos[element],
        //   isCompleted: true,
        // };
    
        // setLineThrough(newTodos);
      };


    return (
        <div className='mt-5 w-100'>
            <h3 className='fw-bold text-info text-center'>TODO</h3>
            <div className='w-25 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={nameSubmit} name='name' placeholder='name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name='name' onChange={descriptionSubmit} placeholder='description' id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
            </div>

            <div className='mt-5 p-4 row row-cols-3 gap-4 w-50 mx-auto'>
                {
                    todos.map(data => {
                    return   <div key={data._id} className="card-body shadow w-50 rounded">
                        <h5 className={`card-title ${data.isCompleted && 'text-decoration-line-through'}`} >{ data.name}</h5>
                        <p className="card-text">{ data.description}</p>
                           <button onClick={()=>taskCompleted(data.name)} className='btn btn-warning me-3'>Complete</button>
                           <button onClick={()=> deleteTodo(data._id)} className='btn btn-danger'>Delete</button>
                        </div>
                    })
                }
            </div>
                <ToastContainer/>
        </div>
    );
};

export default Todo;