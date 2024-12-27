import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation.js';
import Main_page from './pages/Main_page.js';
import Employees from './pages/Employees.js';
import Actions from './pages/Actions.js';

function App() {
  return (
    <div>
      <Navigation/>
      <div class="block">
      <Routes>
        <Route path="/" element={<Main_page/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/actions" element={<Actions/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
