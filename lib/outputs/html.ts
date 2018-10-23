import { Message, Writer } from '../types';

export const serialize = (m: Message): string => `<article>
   <div>${m.from}</div>
   <time>${m.on}</time>
   <p>${m.text}</p>
</article>`;

export const html: Writer = {
   save(messages: Message[]) {
      messages.sort((m1, m2) => (m1.on > m2.on ? 1 : -1));

      const list: string = messages.map(serialize).join('');
      const html = `<!DOCTYPE html><html><body>${list}</body></html>`;

      return html != null;
   },
   serialize
};
