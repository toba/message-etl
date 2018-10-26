import { Message, Writer } from '../types';

export const serialize = (m: Message): string => `${m.on.getHours()}:${
   m.on.getMinutes
}
   ${m.from}
   ${m.text}`;

export const text: Writer = {
   write(messages: Message[]) {
      

      const list: string = messages.map(serialize).join('\n');
      return `<!DOCTYPE html><html><body>${list}</body></html>`;
   },
   serialize,
   fileName: 'messages.txt'
};
