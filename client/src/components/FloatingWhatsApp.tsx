import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5592981112101?text=Olá! Gostaria de saber mais sobre os serviços da SB Vendas."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer transition-transform duration-300 hover:scale-110 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0 group-hover:scale-[1.6] transition-all duration-[2s] animate-[whatsapp-pulse_2s_ease-out_infinite] -z-10"></div>
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill="currentColor"></path>
      </svg>
    </a>
  );
}