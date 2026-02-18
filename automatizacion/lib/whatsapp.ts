const WHATSAPP_NUMBER = "573053335489";

export function createWhatsAppHref(message: string) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
