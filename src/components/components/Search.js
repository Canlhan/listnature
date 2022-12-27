import React, { useRef } from 'react'
import { BiSearch } from "react-icons/bi";
const Search = (props) => {


const inputref=useRef();

  const whenwrite=(e)=>{
    
    console.log(e.target.value);
    const filteredar=props.produc.filter((product)=>product.name.includes(e.target.value));
      props.filter(filteredar);
  }

  return (

    <>
         <div className='row text login mt-5'>
          <div className='col-5'>
          <div className='d-flex'>
            <div className='logo'>
                <BiSearch size={30}/>
            </div>
          <input type="text" ref={inputref} onChange={whenwrite}  class="form-control" id="exampleInputPassword1" placeholder="Search the ring tone...."/>
          </div>
          
          </div>
             
        </div>
    </>
  )
}

export default Search