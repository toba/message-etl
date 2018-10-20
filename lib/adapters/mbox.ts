import { Adapter, Message, Source, Relation } from '../types';

const re = /[Z0-9]\.html$/;

function parse(msg: string): Message | null {
   return {
      source: Source.GoogleVoice,
      from: Relation.Self,
      on: new Date(),
      text: msg
   };
}

export const mailbox: Adapter = {
   filter: (fileName: string) => re.test(fileName),

   process(text: string) {
      return [] as Message[];
   },

   parse,

   sourceName: 'Google Mail'
};
