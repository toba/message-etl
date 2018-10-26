

export const numbersOnly = (text: string | null) =>
   text !== null ? text.replace(/\D/g, '') : null;
