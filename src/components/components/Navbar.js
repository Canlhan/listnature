

import React, { useContext } from 'react'
import { BsFillPlayBtnFill } from "react-icons/bs";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import UserContext from '../../store/usercontext';
import AuthContext from '../../store/auth-content';

const Navbar = () => {

  const navigate=useNavigate();
  const login=localStorage.getItem("login");
  const userCtx=useContext(UserContext);

  const authCtx=useContext(AuthContext);

  const logout=()=>{

    authCtx.logout();
    
    navigate("/");
  }
  const gotouserdetails=()=>{

    navigate("/account/"+userCtx.id);
  }

  return (

    <>
    
    <nav className='hnav' >
         <div className='row  text  h-100 text-center '>

            <div className='col-2  d-flex justify-content-center'>
              <div className='row text'>
                  <div className='col '>
                      <h5><BsFillPlayBtnFill color="white" size="30px"/> </h5>
                  </div>
                  <div className='col justify-content '>
                       <h5 > <Link to="/home" className='linkdecoration'> listnature </Link>  </h5>
                  </div>
              </div>
                   
            </div>
            
            <div className='col-6'>
                    
            </div>
            <div className='col-4  d-flex justify-content-center '>
                    
                    { login ? <div className='row   text'>
                      
                     
                     <div className='col-6 '>
                                  <h6  className='text'>  <Link to="/ownedringtones" className='linkdecoration'>Owned Ringtones </Link></h6>
                                </div>'
                      
                     
                     
                         <div className='col' onClick={gotouserdetails}>
                        <h6> {userCtx.firstName} {userCtx.lastName}</h6>
                          </div>
                          <div className='col'>
                          
                          <AiOutlineUser onClick={logout} size="30px"/>
                    </div>
                      
                      
                    </div>:''
                    }
                   

            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar