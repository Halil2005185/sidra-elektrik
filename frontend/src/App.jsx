import Header from "./components/Header/header"
import Footer from "./components/Footer.jsx/footer"
import Home from "./pages/Home/home"
import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}