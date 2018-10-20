import { Adapter, Message, Source, Facebook } from '../types';
import { is } from '@toba/tools';
import { match } from '../matcher';

function parse(msg: Facebook.Message): Message | null {
   return {
      source: Source.FacebookMessenger,
      text: msg.content,
      on: new Date(msg.timestamp_ms),
      from: match.name(msg.sender_name)
   };
}

export const facebookMessenger: Adapter = {
   filter: (fileName: string) => fileName == 'message.json',

   process(text: string) {
      const file: Facebook.MessageExport = JSON.parse(text);
      return is.array(file.messages)
         ? (file.messages
              .map(m => parse(m))
              .filter(m => m !== null) as Message[])
         : [];
   },

   parse,

   sourceName: 'Facebook Messenger'
};
