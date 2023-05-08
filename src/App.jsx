import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./scrolltotop";
const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Router>
      <ScrollToTop />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/productlist' element={<ProductList/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </div>

    // <Home />
    // <Route path="/" component={Home} />
    // <Route path="/dashboard" component={Dashboard} />
    // <Route path="/dashboard" component={Dashboard} />
    // <Route path="/dashboard" component={Dashboard} />
    // <Route path="/dashboard" component={Dashboard} />
  )
  
};
export default App;
