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
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/admin-mian" element={<AdminMian />} />
      </Routes>
      <Footer />
    </div>
  )
}