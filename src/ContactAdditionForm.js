import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import  Card  from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import BadgeIcon from '@mui/icons-material/Badge';
import { API } from "./global";

import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';



const formValidationSchema = yup.object({
  Name : yup.string().required("Please add name"),
  
  Email : yup.string().required("Please add email"),
  Message : yup.string().required("Please add Message"),
  phone : yup.number().required("Please add  phoneno")
}
);


export function ContactAdditionForm() {
  

  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: "",
                      
                      Email:"",
                      Message: "",
                      phone: ""
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddContactAPI(values)
  })

  
  const navigate = useNavigate();
  

  function AddContactAPI(newContact){
    fetch(`${API}/Contacts`,
      {method:"POST",
      body : JSON.stringify(newContact),
      headers : {"Content-Type":"application/json"
       }
       
    }
    ).then(()=>navigate("/data"))
      
  }
  

  
return(
  <Card id="card"style={{width:"100%",height:700,margin:"auto",
  backgroundColor:"whitesmoke"}}>
    <Button style={{ backgroundColor: "black",
   color:"white",margin:"1%"}} variant="outlined" 
  onClick={() => {
          return navigate("/home");
        }}
        > <HomeIcon  />  Back to Home</Button>


<h1 style={{textAlign:"center"}}>Contact Us</h1>

       
       

      
            <h3 style={{textAlign:"center"}}><i>Getting in touch is easy! </i></h3>
            
            
 
    <form  onSubmit={handleSubmit}  style={{alignItems:"center",textAlign:"center",padding:15}}>
      
    
      
    <BadgeIcon/>
       <TextField id="standard-basic" label="Name" 
      variant="standard" error={touched.Name && errors.Name}
      
         name="Name" 
         value={values.Name} 
         onChange={handleChange} 
         onBlur = {handleBlur}
         
          
           helperText={touched.Name && errors.Name} />
      
<br></br>

      
     
       
        <br></br>
     <EmailIcon/>
      <TextField
      error={touched.Email && errors.Email}
      
       label="Email"
        variant="standard" 
         name="Email" 
         value={values.Email}
          onChange={handleChange} 
          onBlur = {handleBlur} 
         
          helperText={touched.Email && errors.Email}/>
          <br></br>
      
     <MessageIcon/> 
     <TextField 
      error={touched.Message && errors.Message}
      
      label="Message" 
      variant="standard"
      
        name="Message" 
      value={values.Message}
       onChange={handleChange}
        onBlur = {handleBlur} 
        
      
       helperText={touched.Message && errors.Message} />
       <br></br>
      
      
   

      
       <PhoneIcon/> <TextField 
      error={touched.phone && errors.phone}
      
      label="Phone"
       variant="standard" 
      
       name="phone" 
      value={values.phone} 
      onChange={handleChange} 
      onBlur = {handleBlur} 
      
       helperText={touched.phone && errors.phone}/>
      <br></br>
      <br></br>
      
    

      <Button variant="filled" 
      className="addContactButton" style={{backgroundColor:"grey"}} type="submit">Submit</Button>
    </form>
    </Card>
  );
}



      
