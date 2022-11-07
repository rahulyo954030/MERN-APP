import "./styles/App.css"
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import Pvtroute from "./components/Pvtroute";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={
        <Pvtroute>
         <Home/>
        </Pvtroute>
        } />
        <Route path="/blogs" element={
        <Pvtroute>
        <Blogs/>
        </Pvtroute>} />
        <Route path="/products" element={
        <Pvtroute>
        <Products/>
        </Pvtroute>} />
        <Route path="/cart" element={
        <Pvtroute>
        <Cart/>
        </Pvtroute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Signup/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
