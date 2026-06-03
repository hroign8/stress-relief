import { FaWhatsapp } from "react-icons/fa";

// WhatsApp contact: Canadian number +1 (226) 961-9744.
// wa.me requires the full international number with no symbols.
const WHATSAPP_NUMBER = "12269619744";
const WHATSAPP_MESSAGE = "Hi Stress Relief! I'd like to book a cleaning service.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105 hover:bg-[#1ebe5b]"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
