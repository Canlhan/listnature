import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import OwnedRingtones from './components/pages/OwnedRingtones';
import UserDetail from './components/pages/UserDetail';
import Login from './components/pages/Login';
import Navbar from './components/components/Navbar';
import Administratorlogin from './components/pages/Administratorlogin';
import AdminDash from './components/pages/AdminDash';
import Signup from './components/pages/Signup';
import Ringdetail from './components/pages/Ringdetail';
import Payment from './components/pages/Payment';
function App() {
  const logincus=localStorage.getItem("login");
  const navigate=useNavigate();
  return (
  <>
   
   <Navbar/>
   <div className='home overflow-hidden'>
    <Routes>


    <Route path='/home' element={<Home/>}/>
    <Route path='/owned' element={<OwnedRingtones/>}/>
    <Route path='/account/:id' element={<UserDetail/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/adminlogin' element={<Administratorlogin/>}/>
    <Route path="/admindash" element={<AdminDash/>}/>
    <Route path='/ringdetail/:id' element={<Ringdetail/>}/>
    <Route path='/signup' element={<Signup/>}/>
    */

    <Route path="/payment" element={<Payment/>}/>
    
       
     
     
    
   
        
        
      
     
      
    </Routes>

    </div>
  
    
  </>
  );
}

export default App;
