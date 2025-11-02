import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import AbnehmenPage from "./pages/Abnehmen";
import MedicamentePage from "./pages/medikamente";
import ErfahrungenPage from "./pages/erfahrungen";
import UeberUnsPage from "./pages/ueberUns";
import Tabletent from "./pages/Tabletten/Tabletent/Tabletent";
import Spritzen from "./pages/Tabletten/Spritzen/Spritzen";
import Medikament from "./pages/Tabletten/Medikamente/Medikamente";
import Ozempic from "./pages/Medikamente/Ozempic/Ozempic";
import Wegovy from "./pages/Medikamente/Wegovy/Wegovy";
import Saxenda from "./pages/Medikamente/Saxenda/Saxenda";
import Rybelsus from "./pages/Medikamente/Rybelsus/Rybelsus";
import Mysimba from "./pages/Mysimba/Mysimba.jsx";
import Mounjaro from "./pages/Medikamente/Mounjaro/mounjaro";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/abnehmen" element={<AbnehmenPage />} />
      <Route path="/spritzen" element={<Spritzen />} />
      <Route path="/tabletent" element={<Tabletent />} />
      <Route path="/medikament" element={<Medikament />} />
      <Route path="/medikamente" element={<MedicamentePage />} />
      <Route path="/ozempic" element={<Ozempic />} />
      <Route path="/wegovy" element={<Wegovy />} />
      <Route path="/mounjaro" element={<Mounjaro />} />
      <Route path="/saxenda" element={<Saxenda />} />
      <Route path="/rybelsus" element={<Rybelsus />} />
      <Route path="/mysimba" element={<Mysimba />} />
      <Route path="/erfahrungen" element={<ErfahrungenPage />} />
      <Route path="/ueber-uns" element={<UeberUnsPage />} />

    </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
