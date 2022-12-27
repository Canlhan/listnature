
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { json, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import productContext from '../../store/productcontext';
const Payment = () => {
    const navigate=useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const[card,setCard]=useState();
    const[buyedSound,setBuySound]=useState(undefined);
   
    const productcontex=useContext(productContext);

    const[bol,setbol]=useState(false);
    const getcards= async (data)=>{

        const result= await fetch(`https://localhost:44374/api/Card/`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const resultjson=await result.json();
        
        localStorage.setItem("bol",resultjson.success);
        setbol(resultjson.success);
        console.log(resultjson);
    }

    const onsubmit=(data)=>{

        console.log("submite basıldı")
       const carddata={cardname:data.cardname,cardnumber:data.cardnumber,date:(data.date1+"/"+data.date2),cvc:data.cvc,userId:1};
        setCard(carddata);
        
        
        localStorage.removeItem("bol");
       
        console.log(data);
      
        

    }
    
    const buy=async (id)=>{

        const result= await fetch(`https://localhost:44374/api/products/getbyid/${id}`);
        const resjson=await result.json();
        setBuySound(resjson.data);

    }
    useEffect(()=>{
        
            productcontex.addownprodudc({...productcontex.detailsound,userId:localStorage.getItem("customerId")});
            
        

    },[productcontex.detailsound])
    console.log("bol: "+bol);
    console.log("dbcarda giden: "+JSON.stringify(card));
    useEffect(()=>{

        getcards(card);
    },[card])
    const gotoownedringtone=()=>{
        
                
            navigate("/owned")
       
            
    }
    console.log(buyedSound)
  return (
   <>
   <div className='container centertext mt-5'>
    <div className='row colorwhite d-flex align-items-center justify-content-center'>
            
           {!localStorage.getItem("bol") ? <h3> Kart bilgileri hatalı</h3>: <img 
            style={{height:'250px',width:'250px',rotate:'90deg'}}
            src={logo} />
             
            }
    </div>
   <div className=' colorwhite  d-flex align-items-center justify-content-center  h-100'>
            
           
            <div className='row w-50 h-50    '>
                
                <div className='col-6 labe'>

                    <div className='mt-4  rightto '>
                        <p className=' '> CARD USER'S NAME-SURNAME:</p>
                    </div>
                    <div className='mt-4 rightto  ' >
                        <p className='  '>CARD NUMBER</p>
                    </div>

                    

                    
                    <div className='mt-4  w-100  rightto   '>
                        <p className=' w-100 '>DATE </p>
                    </div>
                    <div className='mt-4  w-100  rightto   '>
                        <p className=' w-100 '>CVC </p>
                    </div>
                    
                    

                </div>
                
                
                <div className='col-6  pr-2 '>

                <form className=' ' onSubmit={handleSubmit(onsubmit)}>
                
              

                        <div class="form-group   ">
                                            <label for="exampleInputEmail1"></label>
                                                <input  type="text"
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("cardname")} 
                                pattern='[A-Za-z]+'
                                placeholder="enter name"/>
                                        
                            </div>
                            <div class="form-group mt-2">
                                            
                                            <input  type="text" class="form-control mt-2"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" minLength="16" pattern="[0-9]{16}"  placeholder="Enter card number"
                                            {...register("cardnumber")}/>
                            </div>
                                    
                        
                            <div class="form-group mt-2 ">
                                        
                                    <div className='row  d-flex'>
                                    
                                    
                                    <div className='col-3  '>
                                        
                                    <input  type="text" class="form-control centertext w-100 m-0 p-0 mt-1 "
                                            id="exampleInputEmail1" aria-describedby="emailHelp" 
                                            pattern="(0?[1-9]|[12][0-9]|3[01])"
                                            {...register("date1")}/>
                                    </div>
                                    <div className='col-3  m-0  '>
                                         <input  type="text" class="form-control  centertext w-100 m-0 p-0 mt-1 "
                                            id="exampleInputEmail1" aria-describedby="emailHelp" 
                                            pattern="(0?[1-9]|[12][0-9]|3[01])"
                                            {...register("date2")}/>
                                    </div>
                            
                            </div>
                                    
                                    
                            </div>
                            <div class="form-group mt-3">
                                            
                                            <input  type="text" class="form-control mt-2 w-25"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter card number"
                                            {...register("cvc")}
                                            pattern="^[0-9]{3}"
                                            maxLength='999'
                                            />
                            </div>
                            <div class="form-group mt-3 centertext">
                                            
                                            <p> {productcontex.detailsound.price}   Dollar</p>
                            </div>
                            <div className='paymentbtn centertext'>
                                <button className='downloadbtn   w-75' style={{backgroundColor:'#2424A3'}} onClick={gotoownedringtone}>COMPLETE PURCHASE</button>
                            </div>
            
                   
                                
            </form>    
                </div>
           
            </div>
           
        </div>
   </div>
        
   
   </>
  )
}

export default Payment