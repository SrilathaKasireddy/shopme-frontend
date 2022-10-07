import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { API } from "./global"
// import Counter from "./Counter"
import Badge from '@mui/material/Badge';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Cart from "./cart"
import Card from '@mui/material/Card';
import "./App.css"
import React  from 'react';

export default function LatestClothesDetails() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  function getSingleItemAPI() {
    fetch(`${API}/latestcollection/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'x-auth-token': `${token}`,

      },
    })
      .then((data) => data.json())
      .then((mv) => setItem(mv));
  }
  useEffect(() => {
    getSingleItemAPI();
  }, []);
  console.log(item)

  return (
    <>
    <Button style={{marginLeft:"90%"}}>
     <Badge className="like" badgeContent= {count} 
      color="primary"  >
     <ShoppingCartIcon style={{ fill: 'black' }} 
       className="likebutton"  
        onClick={() => navigate("/checkout")}
         />
    
   
    
    </Badge>
   </Button>
    <div>
   
     
      <img  alt ="productimage" width ="400" src= {item.image}/>
      
    
    </div>
    <Cart/>
    <div>
     
     {item.name}
     
    
   
   <Button  onClick={() => setCount(count + 1)} >
    
      
    Add to Cart 
    
   </Button>
   
   
  </div>
  </>

  
    
  )
}






 