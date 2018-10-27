import { Reader, Message, Source, Passport, Relation } from '../types';
import { is } from '@toba/tools';
import { parse as xml, validate } from 'fast-xml-parser';
import { match } from '../matcher';

const re = /[A-Za-z]+\s2003-0[1-8]-\d{2}\s[^\.]+\.xml$/;

function parse(msg: Passport.Message): Message | null {
   let byLine = is.value(msg.RM) ? msg.RM : msg.RO;

   if (byLine.includes('could not be')) {
      byLine = msg.defaultFrom!;
   }

   const sender = byLine.replace(/\s*(says)?:\s*/, '');
   const d = `${msg.date!} ${msg.RT}`;

   if (is.empty(msg.RD)) {
      console.error(
         `No content in ${new Date(d).toDateString()} message from ${sender}`
      );
      return null;
   }

   const from = match.name(sender);

   if (from == Relation.None) {
      console.error(`No relation found for ${sender}`);
      return null;
   }

   return {
      source: Source.Passport,
      text: msg.RD,
      on: new Date(d),
      from
   };
}

export const passport: Reader = {
   filter: (fileName: string) => re.test(fileName),

   process(text: string, fileName: string) {
      let messages: Message[] = [];
      const v = validate(text);

      if (v !== true) {
         console.error(`Unable to parse "${fileName}"`, v);
         return messages;
      }

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
         console.error(
            `No Passport messages found in file "${fileName}"`,
            `Parser returned ${JSON.stringify(log)}`
         );
      }
      return messages;
   },

   parse,

   sourceName: 'Microsoft Passport'
};
