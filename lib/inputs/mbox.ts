import { ParsedMail } from 'mailparser';
import { Reader, Message, Source } from '../types';
import { match } from '../matcher';

const re = /[Z0-9]\.html$/;

function parse(msg: ParsedMail): Message | null {
   return {
      source: Source.GMail,
      from: match.name(msg.from.text),
      on: new Date(),
      text: msg.text
   };
}

export const mailbox: Reader = {
   filter: (fileName: string) => re.test(fileName),

   process(_text: string) {
      return [] as Message[];
   },

   parse,

   sourceName: 'Google Mail'
};
