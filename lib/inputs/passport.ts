import { Reader, Message, Source, Passport, Relation } from '../types';
import { is } from '@toba/tools';
import { parse as xml } from 'fast-xml-parser';
import { match } from '../matcher';

const re = /[A-Za-z]+\s2003-0[1-8]-\d{2}\s[^\.]+\.xml$/;

function parse(msg: Passport.Message): Message | null {
   const sender = (is.value(msg.RM) ? msg.RM : msg.RO).replace(
      /\s*says:\s*/,
      ''
   );

   if (is.empty(msg.RD)) {
      console.error(
         `No content in ${new Date(
            msg.date!
         ).toDateString()} message from ${sender}`
      );
      return null;
   }

   const from = match.name(sender);
   const out: Message = {
      source: Source.Passport,
      text: msg.RD,
      on: new Date(msg.date!),
      from
   };

   if (from == Relation.None) {
      console.error(`No relation found for ${sender}`);
   }

   return out;
}

export const passport: Reader = {
   filter: (fileName: string) => re.test(fileName),

   process(text: string, fileName: string) {
      let messages: Message[] = [];
      const log: Passport.Log = xml(text, {
         attributeNamePrefix: '',
         ignoreAttributes: false,
         ignoreNameSpace: true,
         allowBooleanAttributes: true,
         parseAttributeValue: true
      });

      if (is.value(log.Historys) && is.array(log.Historys.History)) {
         console.log(
            `Found ${
               log.Historys.History.length
            } Passport conversations in ${fileName}`
         );
         messages = log.Historys.History.reduce(
            (list, c: Passport.Conversation) => {
               list = list.concat(
                  c.RS.map(m => {
                     m.date = c.CreateDate;
                     m.defaultFrom = c.OwnerFirendName;
                     return parse(m);
                  })
               );
               return list;
            },
            [] as (Message | null)[]
         ).filter(m => m !== null) as Message[];

         console.log(`Converted ${messages.length} Passport messages`);
      } else {
         console.error(`No Passport messages found in ${fileName}`);
      }
      return messages;
   },

   parse,

   sourceName: 'Microsoft Passport'
};
