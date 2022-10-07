import './App.css';
import NavBar from "./Components/Navbar/LandingPage"
import {Routes,Route }from "react-router-dom"
import {Contactus} from "./contactus"
import NotFound from "./NotFound"
import Login from "./Login"
import {Register} from "./Register";
import {ForgetPassword} from "./ForgetPassword";
import {PasswordUpdated} from "./PasswordUpdated"
import  {ChangePassword} from "./ChangePassword";
import LatestClothing from "./latestcloths"
import LandingPage from "./Components/Navbar/LandingPage"
import LatestClothesDetails from "./latestclothesdetails"
// import Checkout from "./checkout";
import Cart from "./cart"


function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path ="/checkout" element={<Checkout />}/> */}
      <Route path="/latestcollection/:id" element={<LatestClothesDetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path ="/latestcollection" element={<LatestClothing/>}/>
        <Route path="*" element={<NotFound />} /> 
        {/* <Route exact path="/" component={Products} /> */}
            <Route exact path="/cart" element={<Cart/>} />
            {/* <Route exact path="/checkout" element={<Checkout/>} /> */}
        <Route path="/" element={<Login />} /> 
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        
      </Routes>
      {/* <NavBar/> */}
      
      {/* <Contactus/> */}
    </div>
  );
}

export default App;