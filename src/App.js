import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import OwnedRingtones from './components/pages/OwnedRingtones';
import UserDetail from './components/pages/UserDetail';
import Login from './components/pages/Login';
import Navbar from './components/components/Navbar';
import Administratorlogin from './components/pages/Administratorlogin';
import AdminDash from './components/pages/AdminDash';
import Signup from './components/pages/Signup';
function App() {
  return (
  <>
   
   <Navbar/>
   <div className='home overflow-hidden'>
    <Routes>

      <Route path='/home' element={<Home/>}/>
      <Route path='/ownedringtones' element={<OwnedRingtones/>}/>
      <Route path='/account' element={<UserDetail/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/adminlogin' element={<Administratorlogin/>}/>
      <Route path="/admindash" element={<AdminDash/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </div>
  
    
  </>
  );
}

export default App;
