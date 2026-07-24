import { CONTACT } from "@/lib/site-data";
import { WhatsApp } from "@/components/ui/Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsApp />
      WhatsApp us
    </a>
  );
}
