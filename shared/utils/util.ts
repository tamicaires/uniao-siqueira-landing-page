export function generateWhatsAppLink(message?: string): string {
  const phoneNumber = "5599981348896";

  let link = `https://wa.me/${phoneNumber}`;

  if (message) {
    const encodedMessage = encodeURIComponent(message);
    link += `?text=${encodedMessage}`;
  }

  return link;
}