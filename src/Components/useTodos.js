import React, { useEffect, useState } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data=>setTodos(data))
    }, [todos])
    
    return [todos, setTodos];
};

export default useTodos;