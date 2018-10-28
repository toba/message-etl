import { timeString, dateString } from '@toba/tools';
import { Message, Writer } from '../types';
import { dayName, curlyQuotes, aboutMoney } from '../tools';
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
      let moneyCount = 0;
      const dayCount = [0, 0];
      const weekDayCount = [0, 0];

      messages.forEach(m => {
         const isWeekDay = [0, 6].indexOf(m.on.getDay()) == -1;
         const monthDay = `${m.on.getMonth()}-${m.on.getDate()}`;

         if (day != monthDay) {
            day = monthDay;
            out += `\n${dayName(m.on)}, ${dateString(m.on)}\n\n`;
            dayCount[0]++;
            if (isWeekDay) {
               weekDayCount[0]++;
            }
         }

         try {
            out += serialize(m);
            dayCount[1]++;
            if (isWeekDay) {
               weekDayCount[1]++;
            }
            if (aboutMoney(m.text)) {
               moneyCount++;
            }
         } catch (err) {
            console.error(JSON.stringify(m), err);
         }
      });

      const dayAverage = dayCount[1] / dayCount[0];
      const weekDayAverage = weekDayCount[1] / weekDayCount[0];
      const phrase = '\nAverage messages per';

      return (
         out +
         `\nTotal messages: ${messages.length}` +
         `\nMessages about finances: ${moneyCount}` +
         `${phrase} day: ${dayAverage}` +
         `${phrase} weekday: ${weekDayAverage}\n`
      );
   },
   serialize,
   fileName: 'messages.txt'
};
