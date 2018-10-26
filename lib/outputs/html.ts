import { Message, Writer } from '../types';

export const serialize = (m: Message): string => `<article>
   <div>${m.from}</div>
   <time>${m.on}</time>
   <p>${m.text}</p>
</article>`;

export const html: Writer = {
   write(messages: Message[]) {
      const list: string = messages.map(serialize).join('');
      return `<!DOCTYPE html><html><body>${list}</body></html>`;
   },
   serialize,
   fileName: 'messages.html'
};
