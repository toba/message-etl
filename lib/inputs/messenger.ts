import { Reader, Message, Source, Facebook, Relation } from '../types';
import { is } from '@toba/tools';
import { match } from '../matcher';

const fileName = 'message.json';

/**
 * Reverse message encoding. This kind of odd process is necesssary to restore
 * emojis.
 */
const decode = (text: string): string => {
   let out = text;
   try {
      out = escape(out);
      out = decodeURIComponent(out);
   } catch (err) {
      console.error(`Cannot decode "${text}"`);
   }
   return out;
};

/**
 * Deocde and remove trailing white space.
 */
const clean = (text: string): string => decode(text.replace(/[\n\r\s]+$/, ''));

function parse(msg: Facebook.Message): Message | null {
   if (is.empty(msg.content)) {
      console.error(
         `No content in ${new Date(
            msg.timestamp_ms
         ).toDateString()} message from ${msg.sender_name}`
      );
      return null;
   }

   const from = match.name(msg.sender_name);
   const out: Message = {
      source: Source.FacebookMessenger,
      text: clean(msg.content),
      on: new Date(msg.timestamp_ms),
      from
   };

   if (from == Relation.None) {
      console.error(`No relation found for ${msg.sender_name}`);
   }

   if (is.array(msg.reactions)) {
      out.reaction = decode(msg.reactions[0].reaction);
   }
   return out;
}

export const facebookMessenger: Reader = {
   filter: (fn: string) => fn == fileName,

   process(text: string) {
      const file: Facebook.Conversation = JSON.parse(text);
      let messages: Message[] = [];

      if (is.array(file.messages)) {
         console.log(
            `Found ${file.messages.length} Facebook messages in ${fileName}`
         );
         messages = file.messages
            .map(m => parse(m))
            .filter(m => m !== null) as Message[];
         console.log(`Converted ${messages.length} Facebook messages`);
      } else {
         console.error(`No messages found in ${fileName}`);
      }
      return messages;
   },

   parse,

   sourceName: 'Facebook Messenger'
};
