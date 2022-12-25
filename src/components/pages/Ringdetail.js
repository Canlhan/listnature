

import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import cle from '../../assets/cleopatra_be.mp3'
import { BiMusic } from "react-icons/bi"
const Ringdetail = () => {


  return (
    <>
    <div className='container colorwhite'>   
            <div className='row   w-50   mt-5 '>

                <div className={`col`}>
                    <BiMusic size={50}/>
                </div>
                <div className='col-10'>

                <div>
                    <h4> oynama şıkıdım şıkıdım </h4>
                </div>
                    <div className='d-flex '>
                        <p> ring tone detail</p>
                        
                      
                    </div>


                </div>
                <hr style={{height:"10px",border:"none",borderBottom:"4px solid white"}}/>
            </div>

            <div className='row   w-25   mt-5 '>

            <ReactAudioPlayer
                        src="https://localhost:44374/uploads/daa4e1fd-cd13-4d2c-a88f-bb577a286055.mp3"
                        controls
                        />
               
                
            </div>
            



            <div className='row mt-2'>

        
                <div className='col-10'>

                    <button className='downloadbtn' style={{backgroundColor:'#2424A3'}}> Purchase</button>

                </div>
            </div>
    </div>
    
    
    </>
  )
}

export default Ringdetail