import { Message, Writer } from '../types';
import { people } from '../config';

//`${m.on.getMonth() + 1}/${m.on.getDate()}/${m.on.getFullYear()}`

export const serialize = (m: Message): string =>
   [m.on.toISOString(), people[m.from].name, m.text].join('|');

export const delimited: Writer = {
   write: (messages: Message[]) => messages.map(serialize).join('\n'),
   fileName: 'messages.csv',
   serialize
};
