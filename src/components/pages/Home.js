

import React, { useState } from 'react'
import Login from './Login'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';

import { AiFillPlaySquare } from "react-icons/ai";

import Ringtonecard from '../components/Ringtonecard';
import Search from '../components/Search';
import OwnedRingtones from './OwnedRingtones';
import UserDetail from './UserDetail';
import Navbar from '../components/Navbar';
import AdminDash from './AdminDash';



const Home = () => {

  const [isAdmin,setAdmin]=useState(true);
  return (
    <>
    
      
      

      <div className='container '>
       
          <Search/>

        <div className='row d-flex '>

          <div className='col'>
              <Ringtonecard col={isAdmin?2:1}/>
          </div>
          
          {
              isAdmin && <AdminDash/>
          }
        </div>
          
        

        
        
      </div>
      
      
      
    

    </>
  )
}

export default Home