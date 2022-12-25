import React, { useEffect, useState } from 'react'



const Usepostsound=(data)=>{

    const [message,setMessage]=useState({});

    useEffect(() => {
        // By moving this function inside the effect, we can clearly see the values it uses.
        async function fetchProduct() {
          const response = await fetch(data.url,{
            method: "POST",
            headers:{
                'Accept': '*/*',
                
               
            },
            body:data.object,
          });
          const json = await response.json();
         

          console.log("postladık "+JSON.stringify(json));
          
          setMessage(json);
        }
    
        fetchProduct();
      }, [data.url,data.object]);
      
     
    return  message;
}
export default Usepostsound;