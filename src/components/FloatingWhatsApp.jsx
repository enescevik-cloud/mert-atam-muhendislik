import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import "../styles/components/FloatingWhatsApp.css";

function FloatingWhatsApp() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <a
      className="floating-whatsapp-icon"
      href="https://wa.me/905558889598"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      title="WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.4} />
    </a>
  );
}

export default FloatingWhatsApp;