import { Routes, Route } from "react-router";
import { Header } from "./components/Home";
import { Footer } from "./components/Home";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/1001" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
