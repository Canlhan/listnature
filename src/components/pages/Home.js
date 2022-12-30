

import React, { useContext, useEffect, useState } from 'react'
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
import productContext from '../../store/productcontext';
import Usepostdata from '../../customhooks/Usepostdata';
import Usefetchdata from '../../customhooks/Usefetchdata';



const Home = () => {

 
  const [trigger,setrigger]=useState(false);
  const auth=useContext(AuthContext);
  const uselogin=localStorage.getItem("login");
  const adminLogin=localStorage.getItem("adminlogin");
  const isAdmin=localStorage.getItem("token");


  const productContexts=useContext(productContext);
  const[producst,setProducts]=useState(productContexts.products);
  const[filtered,setfilter]=useState([]);
  const product=Usefetchdata("https://localhost:44374/api/products/getall")
    useEffect(()=>{

      setfilter(product);

    },[product])
  
    const filterproducts=(product)=>{

      setfilter(product);
    }
  console.log("ana sayfa girdi ")
 
  console.log(uselogin);

    console.log("admin "+adminLogin);

  
  const getproduct=()=>{
    
    setrigger(!trigger);

  }

  
  return (
    <>
    
      
      

      <div className='container '>
       
          <Search produc={product} filter={filterproducts}/>

        <div className='row d-flex  '>

          <div className='col ringdash    overflow-auto '>
            {
              filtered.map((product)=>{
                console.log("product map: "+product.id);
                return <Ringtonecard col={uselogin?1:2} key={product.id} trigger={getproduct} isdownload={uselogin&& true} admin={adminLogin} ring={product}/>
              })
            }
              
          </div>
          
          {
              isAdmin=="admin" && <AdminDash trigger={getproduct}/>
          }
        </div>
          
        

        
        
      </div>
      
      
      
    

    </>
  )
}

export default Home