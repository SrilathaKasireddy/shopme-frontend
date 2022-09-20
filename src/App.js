import './App.css';
import NavBar from "./Components/Navbar/Navbar"
import {Routes,Route }from "react-router-dom"
import {Contactus} from "./contactus"
import NotFound from "./NotFound"
import Login from "./Login"
import {Register} from "./Register";
import {ForgetPassword} from "./ForgetPassword";
import {PasswordUpdated} from "./PasswordUpdated"
import  {ChangePassword} from "./ChangePassword";


function App() {

  return (
    <div className="App">
      <Routes>
        
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/home" element={<NavBar />} />
        <Route path="*" element={<NotFound />} /> 
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
