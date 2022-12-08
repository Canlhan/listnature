

import React from 'react'
import { BiPencil } from "react-icons/bi";
import Navbar from '../components/Navbar';

const UserDetail = (props) => (
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
                                    <td>Can <BiPencil/></td>
                                   
                                   
                                </tr>
                                <tr>
                                    <td className='tdbold'>Surname: </td>
                                    <td> İlhan <BiPencil/></td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td className='tdbold'> Email: </td>
                                    <td> listnature@gmail.com <BiPencil/></td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td className='tdbold'>Password: </td>
                                    <td> *************  <BiPencil/></td>
                                    
                                    
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

export default UserDetail