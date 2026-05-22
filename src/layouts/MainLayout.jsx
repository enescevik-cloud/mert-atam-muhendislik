import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default MainLayout;