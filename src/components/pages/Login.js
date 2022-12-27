import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Usefetchdata from '../../customhooks/Usefetchdata';
import Usepostdata from '../../customhooks/Usepostdata';
import AuthContext from '../../store/auth-content';
import UserContext from '../../store/usercontext';

const Login = () => {

    const usercont=useContext(UserContext);

   
    const navigate=useNavigate();
 
    const login=localStorage.getItem("login");
    const adminlogin=localStorage.getItem("adminlogin");
    const [isauth,setAuth]=useState(true);
   
  
   
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const authctn=useContext(AuthContext);
  
  
    const [addeduser,setUser]=useState({url:"",object:{}});
  
    
   
  
  
    
  
      const result=Usepostdata(addeduser);

      console.log(result);

      useEffect(()=>{

        if(result.success && result.data.roles=="customer"){
            console.log(result.data);
            usercont.addUser(result.data);
            localStorage.setItem("login",true);
            console.log(result.data.id);
            localStorage.setItem("customerId",result.data.id);
            navigate("/home");
        
       }
      },[result,addeduser])
        
       

    

    const onsubmit=(data)=>{




        console.log(data);
        setUser({url:"https://localhost:44374/api/auths/login",object:{...data}});
      
       
       setAuth(false);
        localStorage.setItem("token","customer");
       
        authctn.toke="customer";
        

    }

    if(login || adminlogin)
    {
      return <Navigate to="/home" replace/>
    }

  return (
   <>
   <div className=' container  h-100    p-auto  '>

        <div className='row h-25 '>

            <div className='col text-center  my-auto  '>

                {
                   isauth ? <h5 style={{color:"white"}}> Welcome to listeNature </h5>:<h5 style={{color:"white"}}> giriş bilgilernizi kontrol ediniz</h5>
                }
                
            </div>
        </div>

        
        <div className='row w-100 text    m-auto p-auto '>
                    <div className='login'>
                    <form className='w-25 ' onSubmit={handleSubmit(onsubmit)}>
                                <div class="form-group ">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                     {...register("email")}/>
                                
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                    {...register("password")}/>
                                </div>
                            
                            <div className='loginbtn '>
                                    <button  type="submit" class="btn bg-primary ">Submit</button>
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