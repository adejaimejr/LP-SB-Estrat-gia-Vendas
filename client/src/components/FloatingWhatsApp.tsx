import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5592981112101"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] floating-whatsapp hover:scale-110 transition-transform duration-300"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}