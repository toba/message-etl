import { Adapter, Message, Source, Facebook } from '../types';
import { is } from '@toba/tools';
import { match } from '../matcher';

/**
 * Reverse message encoding. This kind of odd process is necesssary to restore
 * emojis.
 */
const decode = (text: string): string => decodeURIComponent(escape(text));

/**
 * Deocde and remove trailing white space.
 */
const clean = (text: string): string => decode(text.replace(/[\n\r\s]+$/, ''));

function parse(msg: Facebook.Message): Message | null {
   const out: Message = {
      source: Source.FacebookMessenger,
      text: clean(msg.content),
      on: new Date(msg.timestamp_ms),
      from: match.name(msg.sender_name)
   };

   if (is.array(msg.reactions)) {
      out.reaction = decode(msg.reactions[0].reaction);
   }
   return out;
}

export const facebookMessenger: Adapter = {
   filter: (fileName: string) => fileName == 'message.json',

   process(text: string) {
      const file: Facebook.Conversation = JSON.parse(text);
      return is.array(file.messages)
         ? (file.messages
              .map(m => parse(m))
              .filter(m => m !== null) as Message[])
         : [];
   },

   parse,

   sourceName: 'Facebook Messenger'
};
