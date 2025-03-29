import { Routes, Route, Navigate } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { ContactIn } from "./components/ContactIn";
import { ContactEu } from "./components/ContactEu";
import { ContactUs } from "./components/ContactUs";
import { Admin } from "./components/Admin";
import { PageNotFound } from "./components/PageNotFound";
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
        <Route path="contact" element={<Contact />} >
          <Route path="in" element={<ContactIn />} /> 
          <Route path="eu" element={<ContactEu />} /> 
          <Route path="us" element={<ContactUs />} /> 
          <Route path="*" element={<ContactUs />} /> 
        </Route>
        <Route path="/admin" element={ user ? <Admin /> : <PageNotFound />} />
        <Route path="*" element={<PageNotFound title="404"/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
