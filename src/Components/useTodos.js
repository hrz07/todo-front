import React, { useEffect, useState } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://safe-cliffs-08325.herokuapp.com/todo')
            .then(res => res.json())
            .then(data=>setTodos(data))
    }, [todos])
    
    return [todos, setTodos];
};

export default useTodos;