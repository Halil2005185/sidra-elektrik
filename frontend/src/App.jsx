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
import AdminLogin from "./pages/Admin/AdminLogin/dminLogin"
import Favori from "./pages/Favori/favori"
import Search from "./pages/Search/search"
import NotFound from "./pages/NotFound/notFound"
import ScrollTop from "./components/ScrollTop/scrollTop"
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute"
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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/favori" element={<Favori />} />
        <Route path="/search" element={<Search />} />
        
        
        
        
        
        <Route path="/admin">
          <Route index path="admin-mian" element={
            <ProtectedRoute>
              <AdminMian />
            </ProtectedRoute>
          } />
          <Route path="admin-addProduct" element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } />
          <Route path="admin-allProduct" element={
            <ProtectedRoute>
              <AllProduct />
            </ProtectedRoute>
          } />
          <Route path="admin-invoice" element={
            <ProtectedRoute>
              <Invoice />
            </ProtectedRoute>
          } />
          <Route path="admin-edit-product/:documentId" element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          } />

        </Route>


        <Route path="*" element={<NotFound />} />


      </Routes>
      <Footer />
      <ScrollTop />
    </div>
  )
}