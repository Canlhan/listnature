import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Usepostdata from "../../customhooks/Usepostdata";
import AuthContext from "../../store/auth-content";

const Administratorlogin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

   
   
    const navigate=useNavigate();
   
    const adminlogin=localStorage.getItem("adminlogin");
    
    
    const [isauth,setAuth]=useState(true);
   
  
   
    
  
  
    const authctn=useContext(AuthContext);
  
  
    const [addeduser,setUser]=useState({url:"",object:{}});
  
    
   
  
  
    
  
      const result=Usepostdata(addeduser);

      console.log(result);
      useEffect(()=>{

        if(result.success && result.data.roles=="admin"){
            console.log(result.data);
           
            localStorage.setItem("adminlogin",true);
            navigate("/home");
        
       }
      },[result,addeduser])

      

    

    const onsubmit=(data)=>{




        console.log(data);
        setUser({url:"https://localhost:44374/api/auths/login",object:{...data}});
      
       
       setAuth(false);
        localStorage.setItem("token","admin");
      
        authctn.toke="admin";
        

    }

    if(adminlogin){

      return <Navigate to="/home"/>
    }
   

  return (
    <>
      <div className=" container  h-100    p-auto  ">
        <div className="row h-25 ">
          <div className="col text-center  my-auto  "> {!isauth && <h5 style={{color:"white"}}> giriş bilgilernizi kontrol ediniz</h5>}</div>
        </div>

        <div className="row w-100 text    m-auto p-auto ">
          <div className="login">
            <form className="w-25 " onSubmit={handleSubmit(onsubmit)}>
              <div class="form-group ">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  autocomplete="off"
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
                  autocomplete="off"
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
