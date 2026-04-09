import SpotlightsLed from "./pages/Spotlights-led/spotlights-led"
import Chandelier from "./pages/Chandelier/chandelier"
import Decorative from "./pages/Decorative/decorative"
import Accessory from "./pages/Accessory/accessory"
import Footer from "./components/Footer.jsx/footer"
import Header from "./components/Header/header"
import Contact from "./pages/Contact/contact"
import Home from "./pages/Home/home"
import Lamp from "./pages/Lamp/lamp"
import { Route, Routes } from "react-router-dom"
import AdminMian from "./pages/Admin/AdminMian/adminMian"
import AddProduct from "./pages/Admin/AddProduct/addProduct"
import AllProduct from "./pages/Admin/AllProduct/allProduct"
import Invoice from "./pages/Admin/Invoice/invoice,"
import Developer from "./pages/Developer/developer"
import EditProduct from "./pages/Admin/EditProduct/editProduct"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lamps" element={<Lamp />} />
        <Route path="/chandeliers" element={<Chandelier />} />
        <Route path="/spotlights-led" element={<SpotlightsLed />} />
        <Route path="/decorative" element={<Decorative />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/admin/admin-mian" element={<AdminMian />} />
        <Route path="/admin/admin-addProduct" element={<AddProduct />} />
        <Route path="/admin/admin-allProduct" element={<AllProduct />} />
        <Route path="/admin/admin-invoice" element={<Invoice />} />
        <Route path="/admin/admin-edit-product/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}