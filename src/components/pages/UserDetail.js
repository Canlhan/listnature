

import React, { useContext } from 'react'
import { BiPencil } from "react-icons/bi";
import { Navigate } from 'react-router-dom';
import UserContext from '../../store/usercontext';
import Navbar from '../components/Navbar';

const UserDetail = (props) =>{

    const userCtx=useContext(UserContext);

    const login=localStorage.getItem("login");
    

    if(!login){

        return <Navigate to="/" replace/>
    }

return (

    <>

       
        <div className='row colorwhite login pt-5 overflow-hidden ' >

            <div className='col-8 '>

                <div className='row '>


                    <div className='col'>

                        <div>
                            <h4> Account Information</h4>
                        </div>
                        <div className='d-flex'>

                            <table>
                                
                                <tr>
                                    <td className='tdbold'>Name:</td>
                                    <td>{userCtx.firstName} <BiPencil/></td>
                                   
                                   
                                </tr>
                                <tr>
                                    <td className='tdbold'>Surname: </td>
                                    <td> {userCtx.lastName} <BiPencil/></td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td className='tdbold'> Email: </td>
                                    <td> {userCtx.email} <BiPencil/></td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td className='tdbold'>Password: </td>
                                    <td> {userCtx.password}  <BiPencil/></td>
                                    
                                    
                                </tr>
                            </table>

                        </div>


                    </div>
                    <hr style={{ height: "10px", border: "none", borderBottom: "4px solid white" }} />
                </div>

            </div>

        </div>
    </>
)
}
export default UserDetail;