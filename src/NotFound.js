import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import React  from 'react';
export default function Notfound(){
 const navigate = useNavigate();

return(
 <div style={{backgroundColor:"whitesmoke",height:700}}>
<h1>Page Not Found</h1>
<Button style={{ backgroundColor: "black",
   color:"white",margin:"1%"}} variant="outlined" 
  onClick={() => {
          return navigate("/home");
        }}
        > <HomeIcon  />  Back to Home</Button>
<img alt = "Page Not Found"   className="center" 
src="https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"/>
</div>
)


}