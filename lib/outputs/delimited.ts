import { Message, Writer, Relation } from '../types';
import { people } from '../config';

//`${m.on.getMonth() + 1}/${m.on.getDate()}/${m.on.getFullYear()}`

export const serialize = (m: Message): string => {
   const name: string = [Relation.Other, Relation.Self].includes(m.from)
      ? people[m.from].name
      : m.from.toString();

   return [m.on.toISOString(), name, m.text].join('|');
};

export const delimited: Writer = {
   write: (messages: Message[]) => messages.map(serialize).join('\n'),
   fileName: 'messages.csv',
   serialize
};
