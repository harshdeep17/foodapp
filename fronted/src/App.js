import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Whishlist from "./pages/Whishlist";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Cart from "./features/cart/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="bg-yellow-500  bg-opacity-80 relative overflow-auto ">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/whishlist" element={<Whishlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
