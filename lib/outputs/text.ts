import { timeString, dateString, is } from '@toba/tools';
import { Message, Writer } from '../types';
import { dayName, curlyQuotes } from '../tools';
import { people } from '../config';

export const serialize = (m: Message): string =>
   '\t' +
   timeString(m.on) +
   '\t' +
   people[m.from].name +
   ':\t' +
   curlyQuotes(m.text) +
   '\n';

export const text: Writer = {
   write(messages: Message[]) {
      let out = '';
      let day = '';

      messages.forEach(m => {
         const monthDay = `${m.on.getMonth()}-${m.on.getDate()}`;
         if (day != monthDay) {
            day = monthDay;
            out += `\n${dayName(m.on)}, ${dateString(m.on)}\n\n`;
         }
         try {
            out += serialize(m);
         } catch (err) {
            console.error(JSON.stringify(m), err);
         }
      });

      return out;
   },
   serialize,
   fileName: 'messages.txt'
};
