import React, { useEffect, useState } from 'react'
import Usefetchdata from '../../customhooks/Usefetchdata'
import Ringtonecard from '../components/Ringtonecard'
import Search from '../components/Search'

const OwnedRingtones = () => {

  const customerid=localStorage.getItem("customerId");
  const products=Usefetchdata(`https://localhost:44374/api/products/getcustomerid/${customerid}`);
  const uselogin=localStorage.getItem("login");
  const adminLogin=localStorage.getItem("adminlogin");
  const[filteredproduc,setFilter]=useState([]);
  console.log(products);
  
  useEffect(()=>{
    console.log("girdi");
    setFilter(products);

  },[products]);

  
  const filteredproducts=(products)=>{

    setFilter(products);
    
  }

  return (

    <>
            <div className='container' >
                <Search produc={products} filter={filteredproducts}/>

                {
                  filteredproduc.map((product)=> {
                  return <Ringtonecard col={uselogin?1:2} key={product.id} isdownload={true} admin={adminLogin} ring={{id:product.id,name:product.name}}/>
                          })  
                }
               
            </div>
    </>
    
  )
}

export default OwnedRingtones