import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Whishlist from "./pages/Whishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/whishlist" element={<Whishlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          {/* <Route path="/admin" element={</>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
