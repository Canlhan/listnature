import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate=useNavigate();

    const gotologin=()=>{

        navigate("/");
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
            <form className="w-25 ">
              <div class="form-group ">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Surname</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Surname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                />
              </div>
              
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"> Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="loginbtn ">
                <button onClick={gotologin} type="submit" class="btn bg-primary ">
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
