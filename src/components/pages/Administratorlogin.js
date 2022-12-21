import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Usepostdata from "../../customhooks/Usepostdata";
import AuthContext from "../../store/auth-content";

const Administratorlogin = () => {

    

   
    const loginstor=localStorage.getItem("login");
    const navigate=useNavigate();
 
    const login=localStorage.getItem("adminlogin");
    
    const [isauth,setAuth]=useState(true);
   
  
   
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const authctn=useContext(AuthContext);
  
  
    const [addeduser,setUser]=useState({url:"",object:{}});
  
    
   
  
  
    
  
      const result=Usepostdata(addeduser);

      console.log(result);

      if(result.success){
        
            navigate("/home");
        
       }
       else{
              
       }

    

    const onsubmit=(data)=>{




        console.log(data);
        setUser({url:"https://localhost:44374/api/auths/login",object:{...data}});
      
       
       setAuth(false);
        localStorage.setItem("token","admin");
        localStorage.setItem("adminlogin",true);
        authctn.toke="admin";
        

    }

    if(login)
    {
      return <Navigate to="/home" replace/>
    }

  return (
    <>
      <div className=" container  h-100    p-auto  ">
        <div className="row h-25 ">
          <div className="col text-center  my-auto  "></div>
        </div>

        <div className="row w-100 text    m-auto p-auto ">
          <div className="login">
            <form className="w-25 " onSubmit={handleSubmit(onsubmit)}>
              <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...register("email")}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>

              <div className="loginbtn ">
                <button  type="submit" class="btn bg-primary ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col login">
            <p className="colorwhite mt-20"> Administrator login!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administratorlogin;
