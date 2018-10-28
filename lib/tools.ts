import { is, weekday } from '@toba/tools';
import { Message, Relation } from './types';

export const numbersOnly = (text: string | null) =>
   text !== null ? text.replace(/\D/g, '') : null;

export const dayName = (d: Date | number): string =>
   is.date(d) ? weekday[d.getDay()] : weekday[d];

export const curlyQuotes = (text: string | null): string =>
   is.empty(text) || !is.text(text)
      ? ''
      : text!
           .replace(/(\w)'/g, '$1’')
           .replace(/\b'(\w)/g, '‘$1')
           .replace(/([\w,])("|&quot;)/g, '$1”')
           .replace(/("|&quot;)(\w)/g, '“$2');

export function deduplicate(messages: Message[]): Message[] {
   let text: string | null = '';
   let from: Relation = Relation.None;

   return messages.reduce(
      (deduped: Message[], m: Message) => {
         if (m.from != from || m.text != text) {
            text = m.text;
            from = m.from;
            deduped.push(m);
         }
         return deduped;
      },
      [] as Message[]
   );
}
