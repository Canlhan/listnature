import React,{useState} from 'react';





const UserContext=React.createContext(

    {   id:null,
        firstName:'',
        lastName:'',
        password:'',
        email:'',
        roles:'',
        addUser:(user)=>{}
    }
);

 export const UserContextProvider=(props)=>
{
    
   
    const [user,setUser]=useState({id:null,firstName:'',lastName:'',email:'',password:'',roles:'',createdAt:''});

   


    const addHandler=(user)=>{


        console.log(JSON.stringify(user));
        setUser(user);
       

    }
    
    
   
    const contextValue={

        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        password:user.password,
        email:user.email,
        addUser:addHandler
     

    }



    return <UserContext.Provider value={contextValue}>

        {props.children}
    </UserContext.Provider>
};


export default UserContext;