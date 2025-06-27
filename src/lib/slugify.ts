export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // handle accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^\w\s-]/g, "") // remove punctuation
    .trim() // trim spaces at ends
    .replace(/\s+/g, "-") // spaces to dashes
}
