
import React,{useState} from 'react';





const AuthContext=React.createContext(

    {   
        toke:'',
        isLoggedIn:false,
        login:(token)=>{},
        logout:()=>{},
        logoutAdmin:()=>{}


    }
);

 export const AuthContextProvider=(props)=>
{

    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);

    const userIsLogggedIn=!!token;


    const loginHandler=(token)=>{


        setToken(token);
        localStorage.setItem('token',token);

    }
    
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('login');
    }
    const logoutAdminHandler=()=>{

        localStorage.removeItem("adminlogin");
    }

    const contextValue={

        token:token,
        isLoggedIn:userIsLogggedIn ,
        login:loginHandler,
        logout:logoutHandler,
        logoutAdmin:logoutAdminHandler 

    }



    return <AuthContext.Provider value={contextValue}>

        {props.children}
    </AuthContext.Provider>
};


export default AuthContext;