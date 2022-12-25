

import React from 'react'
import { BiMusic } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import {AiFillDelete} from "react-icons/ai";


const Ringtonecard = (props) => {

  const navigate=useNavigate();

  const gotoringdetail=()=>{

    navigate(`/ringdetail/${props.ring.id}`)

  }

  return (
    <>
        <div className='row colorwhite login mt-5 ' onClick={gotoringdetail}>
          
          <div className='col-8'>
                
              <div className='row '>

                    <div className={`col-${props.col}   m-auto`}>
                           <BiMusic size={50}/>
                    </div>
                    <div className='col'>

                      <div>
                           <h4> {props.ring.name}</h4>
                      </div>
                        <div className='d-flex justify-content-between'>
                            <p> ring tone detail</p>
                            {
                                props.isdownload && <button className='downloadbtn'> Download</button>
                            }
                        </div>


                    </div>
                    <div className='col-1'>
                            <AiFillDelete size='40px' style={{marginTop:'15px'}}/>
                    </div>
                    <hr style={{height:"10px",border:"none",borderBottom:"4px solid white"}}/>
              </div>
              
          </div>

        </div>
     
    
    </>
  )
}

export default Ringtonecard