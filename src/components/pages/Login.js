import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate();

    const gotohome=()=>{

        navigate("/home");
    }
  return (
   <>
   <div className=' container  h-100    p-auto  '>

        <div className='row h-25 '>

            <div className='col text-center  my-auto  '>

                <h5 style={{color:"white"}}> Welcome to listeNature </h5>
            </div>
        </div>

        
        <div className='row w-100 text    m-auto p-auto '>
                    <div className='login'>
                    <form className='w-25 '>
                                <div class="form-group ">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                            
                            <div className='loginbtn '>
                                    <button onClick={gotohome} type="submit" class="btn bg-primary ">Submit</button>
                            </div>
                                
                    </form>    
                    </div>
           
        </div>
        <div className='row '>

            <div className='col login'>

                    <p className='colorwhite mt-4'> <Link to="/signup" className='linkdecoration'> Don't have an account? Signup! </Link></p>
                    
            </div>
        </div>

        <div className='row  '>

            <div className='col login'>

                    <p className='colorwhite mt-20'> <Link to="/adminlogin" className='linkdecoration'> Administrator login! </Link> </p>
                    
            </div>
        </div>
        
   
   

   </div>
   
   </>
  )
}

export default Login