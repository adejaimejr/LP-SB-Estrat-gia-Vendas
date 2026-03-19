import { useEffect } from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5592981112101?text=Oi, Samara! Vi seu site e quero entender como vocês podem ajudar meu negócio a vender mais. Pode me contar mais?"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer transition-transform duration-300 hover:scale-110 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0 group-hover:scale-[1.6] transition-all duration-[2s] animate-[whatsapp-pulse_2s_ease-out_infinite] -z-10"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="34" height="34" className="ml-[2px] mb-[2px]">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 448l85.5-22.3c32.5 18 69.4 27.5 107.5 27.5 122.3 0 222-99.6 222-222 0-59.3-23.1-115-65.1-156.9zM223.9 414.9c-33 0-65.3-8.9-93.5-25.7l-6.7-4-69.5 18.2L72.9 335l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
    </a>
  );
}