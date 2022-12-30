import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Usepostdata from "../../customhooks/Usepostdata";
import { useForm } from "react-hook-form";
import AuthContext from "../../store/auth-content";

const Signup = () => {
  const navigate=useNavigate();
 
  const login=localStorage.getItem("login");

 

 
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const authctn=useContext(AuthContext);


  const [addeduser,setUser]=useState({url:"",object:{}});

  
  const [isadd,setadd]=useState(false);


  

    const result=Usepostdata(addeduser);
     
  
  
   if(result){

      navigate("/");

     }
   
  
  
  

  const onsubmit=(data)=>{




        console.log(data);
        setUser({url:"https://localhost:44374/api/users/add",object:{...data,roles:'customer'}});
      
        setadd(true);
       
        localStorage.setItem("token","customer");
        localStorage.setItem("login",true);
        authctn.toke="customer";
        

    }
    if(login)
    {
      return <Navigate to="/" replace/>
    }


   
  return (
    <>
    
      <div className="container mt-5">


        <div className="row h-25 ">
          <div className="col text-center  my-auto  ">
            <h5 style={{ color: "white" }}> Welcome to listeNature </h5>
          </div>
        </div>

        <div className="row w-100 text    m-auto p-auto ">
        
          <div className="login">
            <form className="w-25 " onSubmit={handleSubmit(onsubmit)}>
              <div class="form-group ">
                <label for="2">Name</label>
                <input
                  type="default"
                  class="form-control"
                  id="2"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  
                  {...register("firstName")}
                />
              </div>
              <div class="form-group">
                <label for="3">Surname</label>
                <input
                  type="default"
                  class="form-control"
                  id="3"
                  placeholder="Surname"
                     
                  {...register("lastName")}          
                    />
              </div>
              <div class="form-group">
                <label for="4">Email</label>
                <input
                  type="default"
                  class="form-control"
                  id="5"
                  placeholder="Email"
                  {...register("email")}
                  
                />
              </div>
              
              <div class="form-group">
                <label for="6">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="6"
                  placeholder="Password"
                  {...register("password")}
                 

                />
              </div>
              <div class="form-group">
                <label for="7"> Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="7"
                  placeholder="Confirm Password"
                  
                 
                />
              </div>

              <div className="loginbtn ">
                <button  type="submit" class="btn bg-primary ">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        

        
      </div>
    </>
  );
};

export default Signup;
