import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}
