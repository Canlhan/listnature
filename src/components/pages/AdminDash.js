

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Usepostdata from '../../customhooks/Usepostdata';
import Usepostsound from '../../customhooks/Usepostsound';


const AdminDash = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [product,setProduct]=useState({url:'',object:{}})
    const[ringtone,setRingtone]=useState({url:'',object:{}});
    const[sound,setSoundfile]=useState();

    

    const uploadfile=async (data)=>{

        const result= await fetch("https://localhost:44374/api/ringtones/add",{
            
                method: "POST",
                headers:{
                    'Accept': '*/*',
                    
                   
                },
                body:data
        }).then((response)=>{
            console.log(response);
        })
    }
   
    const addproduct=async (product)=>{

        const url="https://localhost:44374/api/Products/add";
        const result =await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'applicaiton/json'
            },
            body:JSON.stringify(product)
        }).then((response)=>{
            console.log("products result : "+response);
        })
    }

    const[file,setFile]=useState();
    

    const fileinput=(e)=>{

        
        const formdata=new FormData();
       
        formdata.append('ringtone',file);
        formdata.append('id',1010);
        setFile(e.target.files[0]);
        setSoundfile(formdata);
        console.log(sound);
        
    }

    
   
    
    const onsubmit=(data)=>{


        console.log("sound: "+sound);
        addproduct({...data,userId:1});
        uploadfile(sound);
        
       
        
        
       
        

    }
  
    

    

    
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
        <div className='col-5 colorwhite mt-5' >

            <div className='row' >
                
                <input style={{height:"30px",width:"70%"}} type="file"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={fileinput}/>
            </div>
            <div className='row mt-3'>

            <form className=' ' onSubmit={handleSubmit(onsubmit)}>
                    <div class="form-group ">
                                    <label for="exampleInputEmail1">Ringtone Name</label>
                                    <input style={{height:"30px",width:"70%"}} type="text"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("name")} placeholder="Enter email"/>
                                
                    </div>
                    <div class="form-group">
                                    <label for="exampleInputPassword1">Ringtone Explanation</label>
                                    <input style={{height:"30px",width:"70%"}} type="text" class="form-control mt-2"
                                     id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description"
                                     {...register("description")}/>
                    </div>
                            
                   
                    <div class="form-group ">
                                    <label for="exampleInputEmail1">Price</label>
                                    <input style={{height:"30px",width:"70%"}} type="number"
                          class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("price")} placeholder="enter price"/>
                                
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