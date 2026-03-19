// WhatsApp configuration and utilities
export const WHATSAPP_CONFIG = {
  number: "6582668669",
  defaultMessage: "Hello! I would like to book a room at CATWALK KTV. Please let me know about availability and pricing.",
};

export const createWhatsAppUrl = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`;
};

export const formatPhoneNumber = (number: string = WHATSAPP_CONFIG.number) => {
  // Format as +65 8266 8669
  return `+${number.slice(0, 2)} ${number.slice(2, 6)} ${number.slice(6)}`;
};