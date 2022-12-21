import React, { useEffect, useState } from 'react'



const Usepostdata=(data)=>{
    const [message,setMessage]=useState({});

    useEffect(() => {
        // By moving this function inside the effect, we can clearly see the values it uses.
        async function fetchProduct() {
          const response = await fetch(data.url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data.object),
          });
          const json = await response.json();
         

          console.log(json);
          
          setMessage(json);
        }
    
        fetchProduct();
      }, [data.url,data.object]);
      
     
    return  message;
}
export default Usepostdata;