

import React, { useContext, useState } from 'react'
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
import AuthContext from '../../store/auth-content';
import { Navigate } from 'react-router-dom';



const Home = () => {

 

  const auth=useContext(AuthContext);
  const uselogin=localStorage.getItem("login");
  const adminLogin=localStorage.getItem("adminlogin");
  const isAdmin=localStorage.getItem("token");
  console.log(isAdmin);

    console.log("admin "+adminLogin);

  
  
  return (
    <>
    
      
      

      <div className='container '>
       
          <Search/>

        <div className='row d-flex '>

          <div className='col'>
              <Ringtonecard col={uselogin?1:2} isdownload={uselogin&& true} ring={{id:1,name:'oynama şıkıdım şıkıdım'}}/>
          </div>
          
          {
              isAdmin=="admin" && <AdminDash/>
          }
        </div>
          
        

        
        
      </div>
      
      
      
    

    </>
  )
}

export default Home