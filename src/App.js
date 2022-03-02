
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Summery from './Component/Summery';
import Thankyou from './Component/Thankyou';
import Error from './Component/Error';
import CartList from './Component/CartList';
import Footer from './Component/Footer';



function App() {
  return (
    <div style={{ position: "relative"}} >
 <BrowserRouter  >
<Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/summary" element={<Summery/>} />
    <Route path="/thanks" element={<Thankyou/>} />
    
    <Route path="/cartlist" element={<CartList/>} />
    <Route path="*" element={<Error/>} />
      
 </Routes>
 <div tyle={{  position: "absolute",
    bottom:"0px"}}>
 <Footer s/>
 </div>
 
  </BrowserRouter>
    </div>
  );
}

export default App;
