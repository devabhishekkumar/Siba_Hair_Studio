export function classNames(...names: (string | false | undefined | null)[]) {
  return names.filter(Boolean).join(' ');
}
export function whatsappLink(number: string, text: string) {
  const digits = number.replace(/[^\d]/g, '');
  return digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
    : '';
}

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number) {
  return priceFormatter.format(amount);
}
