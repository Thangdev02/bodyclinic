import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import AbnehmenPage from "./pages/Abnehmen";
import MedicamentePage from "./pages/medikamente";
import ErfahrungenPage from "./pages/erfahrungen";
import UeberUnsPage from "./pages/ueberUns";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/abnehmen" element={<AbnehmenPage />} />
      <Route path="/medikamente" element={<MedicamentePage />} />
      <Route path="/erfahrungen" element={<ErfahrungenPage />} />
      <Route path="/ueber-uns" element={<UeberUnsPage />} />

    </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
