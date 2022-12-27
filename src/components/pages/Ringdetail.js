

import React, { useContext, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import cle from '../../assets/cleopatra_be.mp3'
import { BiMusic } from "react-icons/bi"
import Usefetchdata from '../../customhooks/Usefetchdata';
import { useNavigate, useParams } from 'react-router-dom';
import productContext from '../../store/productcontext';
const Ringdetail = (props) => {

  
    const navigate=useNavigate();
    const param=useParams();

    const[downlo,setDown]=useState(false);
    const productctx=useContext(productContext);

    


    
    
    
    useEffect(()=>{

        productctx.getproductdetail(param.id);
        productctx.getproducts(param.id);
        
    },[])



    const detailson=productctx.detailsound;
    const product=productctx.product;
    console.log(product.userId);
    useEffect(()=>{

        if(product.userId != 0){
            console.log("userıd o değil")
            console.log("proooo: "+JSON.stringify(product));
            setDown(true);
        }
    },[product])
    
    const SOUND_BASE_URL="https://localhost:44374/"
    
    const gotopayment=()=>{
        localStorage.setItem("soundId",param.id);
        productctx.addownprodudc(param.id);
        navigate("/payment");
    }
  return (
    <>
    <div className='container colorwhite'>   
            <div className='row   w-50   mt-5 '>

                <div className={`col`}>
                    <BiMusic size={50}/>
                </div>
                <div className='col-10'>

                <div>
                    <h4>{detailson.name} </h4>
                </div>
                    <div className='d-flex '>
                        <p> {detailson.description}</p>
                        
                      
                    </div>


                </div>
                <hr style={{height:"10px",border:"none",borderBottom:"4px solid white"}}/>
            </div>

            <div className='row   w-25   mt-5 '>

                {
                    product.userId !=0 ? <ReactAudioPlayer
                    src={`${SOUND_BASE_URL}${detailson.soundPath}`}
                    controls
                    
                    /> :
                    <ReactAudioPlayer
                    src={`${SOUND_BASE_URL}${detailson.soundPath}`}
                    controls
                    controlsList='nodownload'
                    />
                }
            
               
                
            </div>
            



            <div className='row mt-2'>

        
                <div className='col-10'>

                    <button className='downloadbtn' style={{backgroundColor:'#2424A3'}} onClick={gotopayment}> Purchase</button>

                </div>
            </div>
    </div>
    
    
    </>
  )
}

export default Ringdetail