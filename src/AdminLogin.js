// import {
//  Typography,
//  Button,
 
// } from '@mui/material'

// import React,{useContext} from 'react'
// import { useFormik } from 'formik'
// import * as Yup from "yup";
// import { ColorButton } from 'components/Login';
// import TextField from '@mui/material/TextField'
// import { useNavigate } from 'react-router-dom'
// import { API } from '../global';
// import { useState } from 'react';
// // import { AppContext } from "../contexts/AppState";


// export function AdminLogin() {
//  // const {setToken } = useContext(AppContext);
//  const navigate=useNavigate();
//  const[errorMsg,setErrorMsg]=useState("");
//  // const entry=()=>navigate("/Adminevents");

//  const loginUser =(userDetail) => {
//    fetch(`${API}/admin/login`,{
//    method: "POST",
//    body: JSON.stringify(userDetail),
//    headers: {
//      "Content-Type" : "application/json",
//    },
//  }) .then((res) => res.json())
//  .then((content) => {
//    if(content.message==="ok"){
//            let userData=content.user;
//            localStorage.setItem("token", content.data);
//            localStorage.setItem('userEmail', userData.Email);
//            localStorage.setItem('userType', "admin");
//            // setToken(content.data)
//            return navigate("/")
//          }
//            else{
//              setErrorMsg(content.message)
//            }
//          })
//  .catch((err) => console.error);


//  };
//  const initialValues = {
//    Email: 'kasireddysrilatha17@gmail.com',
//    Password: 'SRILATHA',
//    UserName:"srilatha"
//  }
//  const userValidationSchema = Yup.object({
//      Email: Yup.string().email().required('Required'),
//      Password: Yup.string().required('Required'),
//  })
 
//  const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
//    initialValues:initialValues,
//    validationSchema:userValidationSchema ,
//    onSubmit:(userDetail)=>{
//      setErrorMsg("");
//      loginUser(userDetail);
//    },
//  });
 
//  return <div className="add-user-container">
//  <div
//    className="wrapper"
//    style={{
//      position: "relative",
//      textAlign: "center",
//      display: "inline-block",
//    }}
//  >
//  <form  
//  onSubmit={handleSubmit}
//  className="add-user-form" >
//    <Typography variant="h4" pb={2}
//  sx={{
//    textAlign: 'center',
//  }}>
//   <img 
//        src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=740"
//        style={{height:"80px",width:"80px", border:"1px solid black",borderRadius:"50%"}}/>
//        <Typography
//          variant="h6"
//          noWrap
//          component="a"
//          href="/"
//          sx={{
//            mr: 2,
//            display: { xs: 'none', md: 'flex' },
//            fontFamily: 'Hope Sans',
//            fontWeight: 700,
//            color: 'lightseagreen',
//            textDecoration: 'none',
//          }}
//        >
//         Admin of FoodZone
//        </Typography>
//  </Typography>
   
//    <TextField
//    className="add-user-name"
//    label="User Name - Email"
//    type="Email"
//    value={values.Email} 
//    name="Email"
//    onChange={handleChange}
//    onBlur={handleBlur}
//    error={touched.Email&&errors.Email?true:false}
//    helperText={touched.Email&&errors.Email?errors.Email:""}
//    />
//    <TextField
//    className="add-user-name"
//    label="Password"
//    type="password"
//    value={values.Password} 
//    name="Password"
//    onChange={handleChange}
//    onBlur={handleBlur}
//    error={touched.Password&&errors.Password?true:false}
//    helperText={touched.Password&&errors.Password?errors.Password:""}
//    />
//     <ColorButton className="add-user-btn" 
//    type="submit"
//    variant="contained">Login</ColorButton>
//    <div className="text-center" style={{color:"red"}}>
//  {errorMsg}
//  </div>
// </form> 
// </div>
// </div>;
// }