import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { API } from "./global"
// import Counter from "./Counter"

import Card from '@mui/material/Card';
import "./App.css"
import React  from 'react';

export default function LatestClothesDetails() {
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  function getSingleItemAPI() {
    fetch(`${API}/latestcollection/${id}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        // 'x-auth-token': `${token}`,

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
    <div>
      {item.name}
      <img  alt ="product image" src= {item.image}></img>
    </div>
  )
}
