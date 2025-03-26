import { Routes, Route, Navigate } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";
import './App.css';

function App() {
  const user = false;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/admin" element={ user ? <Admin /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
