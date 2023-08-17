let idCounter = 0;

export default function generateId(prefix = 'id', length = 8) {
  const timestamp = Date.now().toString(36);
  const counter = (idCounter++ % 1000).toString(36).padStart(3, '0');
  const randomChars = Array.from({ length }, () => Math.floor(Math.random() * 36).toString(36)).join('');

  return `${prefix}_${timestamp}_${counter}_${randomChars}`;
}
