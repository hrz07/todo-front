import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo/Todo';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequreAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/todo' element={
          <RequireAuth>
            <Todo></Todo>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
      </Routes>
        
    </div>
  );
}

export default App;
