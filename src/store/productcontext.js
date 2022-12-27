import React,{useState} from 'react';





const productContext=React.createContext(

    {   
        
        products:[],
        detailsound:{},
        getproduct:()=>{},
        getproductdetail:(id)=>{},
        ownedProducts:[],
        addownprodudc:(product)=>{},
        deleteProduct:(product)=>{},
        download:false,
        downloadHand:()=>{},
        getproducts:(id)=>{},
        product:{}

    }
);

 export const ProductContextProvider=(props)=>
{

    
    const [products,setProducts]=useState([]);
   
    const[detailsoundd,setSound]=useState({});

    const[ownPro,setOw]=useState([]);
    const[getinproduct,setinpro]=useState({});
    const[isdownload,setDownload]=useState(false);
    const downloadhandler=()=>{
        setDownload(true);
    }

  const getproductHandler=(products)=>{

    setProducts(products)
  }
  const getdetailproduct=async (id)=>{
    const productdetail=await fetch(`https://localhost:44374/api/Products/getdetail/${id}`);
    const json= await productdetail.json();
    
    setSound(json.data[0]);
    console.log("id: "+id);
    console.log("ürün: "+JSON.stringify(json[0]))
    console.log("productddd: "+JSON.stringify(json.data[0]));
    
    
  }
  const getproducttt=async (id)=>{
    const productdetail=await fetch(`https://localhost:44374/api/Products/gebyid/${id}`);
    const json= await productdetail.json();
    
   setinpro(json);
    console.log("id: "+JSON.stringify(json));
    
    
    
  }
  console.log(getinproduct);

  const addproduct= async (product)=>{
    const resproduct=await fetch(`https://localhost:44374/api/products/update`,{
        method:'PUT',
        headers:{
            'Content-type':'Application/json'
        },
        body:JSON.stringify(product)
    });
    
    const json= await product.json();
   
    console.log("id: "+resproduct);
    console.log("idsada: "+JSON.stringify(json));
      setOw((prev)=>{ return [{...json,isdow:true}]});
  }



  const deleteproductHandler= async (product)=>{
    const resproduct=await fetch(`https://localhost:44374/api/products/delete`,{
        method:'DELETE',
        headers:{
            'Content-type':'Application/json'
        },
        body:JSON.stringify(product)
    });
    
    const json= await resproduct.json();
   
    console.log("id: "+resproduct);
    console.log("idsada: "+JSON.stringify(json));
      setOw(product);
  }
    

    const contextValue={

        products:products,
        getproduct:getproductHandler,
        getproductdetail:getdetailproduct,
        detailsound:detailsoundd,
        ownedProducts:ownPro,
        addownprodudc:addproduct,
        deleteProduct:deleteproductHandler,
        download:isdownload,
        downloadHand:downloadhandler,
        getproducts:getproducttt,
        product:getinproduct
        
        

    }



    return <productContext.Provider value={contextValue}>

        {props.children}
    </productContext.Provider>
};


export default productContext;