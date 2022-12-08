

import React from 'react'
import { BiMusic } from "react-icons/bi"
const Ringtonecard = (props) => {


  return (
    <>
        <div className='row colorwhite login mt-5 '>
          
          <div className='col-8'>
                
              <div className='row '>

                    <div className={`col-${props.col}   m-auto`}>
                           <BiMusic size={50}/>
                    </div>
                    <div className='col'>

                      <div>
                           <h4> Ringtone title</h4>
                      </div>
                        <div className='d-flex justify-content-between'>
                            <p> ring tone detail</p>
                            {
                                props.isdownload && <button className='downloadbtn'> Download</button>
                            }
                        </div>


                    </div>
                    <hr style={{height:"10px",border:"none",borderBottom:"4px solid white"}}/>
              </div>
              
          </div>

        </div>
     
    
    </>
  )
}

export default Ringtonecard