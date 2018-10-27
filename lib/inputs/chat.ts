import { Reader, Message, Source, Chat, Relation } from '../types';
import { is } from '@toba/tools';
import { parse as xml, validate } from 'fast-xml-parser';
import { match } from '../matcher';

const matchErrors: string[] = [];
const namePattern = /^\D+3008(@hotmail\.com|\d{8,})\.xml$/;
const datePattern = /^[A-Za-z]+\s200(3-(1[0-2]|09)|4-\d{2})-\d{2}\s[^\.]+\.xml$/;

function parse(msg: Chat.Message): Message | null {
   const sender = msg.From.User.FriendlyName;

   if (is.empty(msg.Text)) {
      console.error(
         `No content in ${new Date(
            msg.DateTime
         ).toDateString()} message from ${sender}`
      );
      return null;
   }

   const from = match.name(sender);

   if (from == Relation.None) {
      const msg = `No relation found for "${sender}"`;
      if (!matchErrors.includes(msg)) {
         console.error(msg);
         matchErrors.push(msg);
      }
      return null;
   }

   return {
      source: Source.MicrosoftChat,
      text: msg.Text['#text'],
      on: new Date(msg.DateTime),
      from
   };
}

export const microsoftChat: Reader = {
   filter: (fileName: string) =>
      namePattern.test(fileName) || datePattern.test(fileName),

   process(text: string, fileName: string) {
      let messages: Message[] = [];
      const v = validate(text);

      if (v !== true) {
         console.error(`Unable to parse "${fileName}"`, v);
         return messages;
      }

      const log: Chat.Conversation = xml(text, {
         attributeNamePrefix: '',
         ignoreAttributes: false,
         ignoreNameSpace: true,
         allowBooleanAttributes: true,
         parseAttributeValue: true
      });

      if (is.value(log.Log) && is.array(log.Log.Message)) {
         console.log(
            `Found ${log.Log.Message.length} Chat messages in ${fileName}`
         );
         messages = log.Log.Message.map(m => parse(m)).filter(m =>
            is.value(m)
         ) as Message[];
         console.log(`Converted ${messages.length} Chat messages`);
      } else {
         console.error(`No Chat messages found in ${fileName}`);
      }
      return messages;
   },

   parse,

   sourceName: 'Microsoft Chat'
};
