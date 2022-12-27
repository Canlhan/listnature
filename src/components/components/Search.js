import React from 'react'
import { BiSearch } from "react-icons/bi";
const Search = () => {

  

  const whenwrite=(e)=>{

  }

  return (

    <>
         <div className='row text login mt-5'>
          <div className='col-5'>
          <div className='d-flex'>
            <div className='logo'>
                <BiSearch size={30}/>
            </div>
          <input type="password" onChange={whenwrite} class="form-control" id="exampleInputPassword1" placeholder="Search the ring tone...."/>
          </div>
          
          </div>
             
        </div>
    </>
  )
}

export default Search