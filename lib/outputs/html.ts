import { Message } from '../types';

export function save(messages: Message[]) {
   messages.sort((m1, m2) => (m1.on > m2.on ? 1 : -1));

   const list: string = messages.map(m => `<div>${m.text}</div>`).join('');
   const html = `<!DOCTYPE html><html><body>${list}</body></html>`;

   return html;
}
