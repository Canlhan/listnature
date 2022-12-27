

import React, { useContext, useEffect, useState } from 'react'
import { BiMusic } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import {AiFillDelete} from "react-icons/ai";

import productContext from '../../store/productcontext';


const Ringtonecard = (props) => {

  const navigate=useNavigate();
 const productcontx=useContext(productContext);
  const[bol,setbol]=useState(undefined); 

  const gotoringdetail=()=>{

    navigate(`/ringdetail/${props.ring.id}`)

  }

  const deletesound=()=>{

    console.log("delete sound c çalıştıııııııııııı")
    deleteringtone();
   

  }
  useEffect(()=>{
    if(bol !=undefined){
      console.log("deleteproduct çalıştıııııııııııı")
      productcontx.deleteProduct(props.ring);
      props.trigger();
     
    }
    

  },[bol])
  const deleteringtone=async ()=>{

    console.log("ringtone çalıştıııııııııııı")
    const result=await fetch(`https://localhost:44374/api/Ringtones/delete/${props.ring.id}`,{
      method:'DELETE',
      headers:{
        'Content-type':'Application/json'
      },
      

    });

    
    setbol(true);
    console.log(result);

  }

  return (
    <>
        <div className='row colorwhite login mt-5  ' >
          
          <div className='col-8 '>
                
              <div className='row ' >

                    <div className={`col-${props.col}   m-auto`}>
                           <BiMusic size={50}/>
                    </div>
                    <div className='col' onClick={gotoringdetail}>

                      <div>
                           <h4> {props.ring.name}</h4>
                      </div>
                        <div className='d-flex justify-content-between'>
                            <p> {props.ring.description}</p>

                            {/**
                             * props.isdownload && <button className='downloadbtn'> Download</button>
                             */
                                
                            }
                        </div>


                    </div>
                    <div className='col-1'>
                      {
                        props.admin &&<AiFillDelete onClick={deletesound} size='40px' style={{marginTop:'15px'}}/>

                      }
                            
                    </div>
                    <hr style={{height:"10px",border:"none",borderBottom:"4px solid white"}}/>
              </div>
              
          </div>

        </div>
     
    
    </>
  )
}

export default Ringtonecard