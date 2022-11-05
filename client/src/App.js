import "./styles/App.css"
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Signup/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
