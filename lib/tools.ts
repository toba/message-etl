import { is, weekday } from '@toba/tools';

export const numbersOnly = (text: string | null) =>
   text !== null ? text.replace(/\D/g, '') : null;

export const dayName = (d: Date | number): string =>
   is.date(d) ? weekday[d.getDay()] : weekday[d];

export const curlyQuotes = (text: string | null): string =>
   is.empty(text)
      ? ''
      : text!
           .replace(/(\w)'/g, '$1’')
           .replace(/\b'(\w)/g, '‘$1')
           .replace(/([\w,])("|&quot;)/g, '$1”')
           .replace(/("|&quot;)(\w)/g, '“$2');
