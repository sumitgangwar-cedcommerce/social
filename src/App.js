import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Data from './Data.js'
import Registration from './Registration';
import Home from './Home';


function App() {
  
  return (
    <Data>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='register' element={<Registration />}></Route>
          <Route path='home' element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </Data>
  );
}

export default App;
