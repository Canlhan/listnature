

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Usefetchdata from '../../customhooks/Usefetchdata';
import Usepostdata from '../../customhooks/Usepostdata';
import Usepostsound from '../../customhooks/Usepostsound';


const AdminDash = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [product,setProduct]=useState()
    const[sound,setSoundfile]=useState();
    const[cameproduct,setCaemeproduct]=useState();
    
    const[file,setFile]=useState();
    
    const formdata=new FormData();
  

    console.log("admindashe girdi")
   
   const getproducts=async ()=>{

    const result= await fetch("https://localhost:44374/api/products/getall",{
            
        method: "GET",
       
            }).then((response)=>{
                    console.log(response);
            })
    
            console.log(result);
   
   
    return result;
   }



    
    

   const uploadfile=async (data)=>{

    console.log("********************UPLOAD FİLE ÇALIŞTIIIIIIS*********************")
    const result= await fetch("https://localhost:44374/api/ringtones/add",{
        
            method: "POST",
            headers:{
                'Accept': '*/*',
                
               
            },
            body:data
    }).then((response)=>{
        
    })
   
    
    console.log("********************UPLOAD FİLE ÇALIŞTIIIIII*********************")
}
   
    const addproduct=async (product)=>{
        console.log("********************ADD PRODUCT ÇALIŞTIII*********************")
        const url="https://localhost:44374/api/products/add";
        const result =await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(product)
        });
        const json=await result.json();
        console.log(json.data.id);
        setCaemeproduct(json.data.id);
       
        console.log("********************ADD PRODUCT ÇALIŞTIII*********************")
        return json.data.id;
        
    }

    

    const fileinput=(e)=>{
        setFile(e.target.files[0]); 
        
    }

    
    
   
    
    const onsubmit=(data)=>{

        console.log("submite basıldı")
       
    
       
        console.log(data);
        setProduct({...data,userId:0})
        
        
        
      
        
        
        props.trigger();
        
       
       
        

    }
console.log("file yüklendi: "+file);

    useEffect(()=>{
        console.log("formdata sounda yüklendi")
        if(cameproduct!==undefined){
            console.log("product undefined değil ve formdataya append olacak ")
            formdata.append('ringtone',file);
            console.log("product ID: "+cameproduct);
            
            formdata.append('id',cameproduct);
            setSoundfile(formdata);
        }
        
        
    },[cameproduct,product])

    useEffect(()=>{
        
        console.log("cama: "+cameproduct);
        uploadfile(sound)
    },[cameproduct,sound])

    
    useEffect(()=>{

        console.log("product yollancak ")
        if(product!==undefined){
            console.log("product undefined değil gigidcek gibi ")
            addproduct(product);
            setProduct(undefined);
        }
       
        
    },[product])
  
    
    

    

    
    const convertobyte=(file)=>{

        return new Promise((resolve)=>{
            
            const filereader=new FileReader();
            filereader.readAsDataURL(file);

            filereader.onload=()=>{
                resolve(filereader.result);
            };

            filereader.onerror=(error)=>{
                
                console.log("hatttaa");
            }
        })
    }
  return (
    <>
        <div className='col-5 colorwhite mt-5 ' >

            <div className='row' >
                
                <input style={{height:"30px",width:"70%"}} type="file"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={fileinput}/>
            </div>
            <div className='row mt-3'>

            <form className=' ' onSubmit={handleSubmit(onsubmit)}>
                    <div class="form-group ">
                                    <label for="exampleInputEmail1">Ringtone Name</label>
                                    <input style={{height:"30px",width:"70%"}} type="text"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" {...register("name")} placeholder="Enter name"/>
                                
                    </div>
                    <div class="form-group">
                                    <label for="exampleInputPassword1">Ringtone Explanation</label>
                                    <input style={{height:"30px",width:"70%"}} type="text" class="form-control mt-2"
                                     id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" placeholder="Enter description"
                                     {...register("description")}/>
                    </div>
                            
                   
                    <div class="form-group ">
                                    <label for="exampleInputEmail1">Price</label>
                                    <input style={{height:"30px",width:"70%"}} type="number"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  autocomplete="off" {...register("price")} placeholder="enter price"/>
                                
                    </div>
                    <div className='loginbtn '>
                        <button className='downloadbtn m-auto mt-4 w-50' style={{backgroundColor:'#2424A3'}}> Save The Sound</button>
                    </div>
                                
            </form>    
          
            </div>
            
        </div>
    </>
  )
}

export default AdminDash