import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Company } from "./components/Company/Company";
import { Careers } from "./components/Careers/Careers";
import { Solutions } from "./components/Solutions/Solutions";
import { Contact } from "./components/Contact/Contact";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
