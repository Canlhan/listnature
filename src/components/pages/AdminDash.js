

import React from 'react'


const AdminDash = () => {

  return (
    <>
        <div className='col-5 colorwhite mt-5' >

            <div className='row'>
                drag falan gelicek buraya
            </div>
            <div className='row'>

            <table >
                                
                <tr>
                    <td className='tdbold'>Ringtone Name:</td>
                    <td>
                         <input style={{height:"30px",width:"70%"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                    </td>                     
                </tr>
               
                <tr className='my-2' >
                    <td className='tdbold '>Ringtone Explanation :</td>
                    <td><input style={{height:"30px",width:"70%"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> </td>                     
                </tr>
                                
            </table>
            </div>
        </div>
    </>
  )
}

export default AdminDash