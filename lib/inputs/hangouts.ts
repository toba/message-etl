import { Reader, Message, Source, Hangouts, Relation } from '../types';
import { is } from '@toba/tools';
import { match } from '../matcher';

const exportName = 'Hangouts.json';

/**
 * Deocde and remove trailing white space.
 */
//const clean = (text: string): string => decode(text.replace(/[\n\r\s]+$/, ''));

function parse(event: Hangouts.Event): Message | null {
   const msg = event.chat_message!;
   const segments = msg.message_content.segment!;

   const from = match.name(msg.senderName!);

   if (from == Relation.None) {
      console.error(`No relation found for ${msg.senderName}`);
      return null;
   }

   const ms: number = parseInt(event.timestamp) / 1000;

   if (isNaN(ms)) {
      console.error(`Unable to parse date from ${event.timestamp}`);
      return null;
   }

   const text = segments.reduce((out: string, s) => out + s.text, '');

   return {
      source: Source.GoogleHangouts,
      text: text,
      on: new Date(ms),
      from
   };
}

export const hangouts: Reader = {
   filter: (fn: string) => fn == exportName,

   process(text: string, fileName: string) {
      const file: Hangouts.Export = JSON.parse(text);
      let messages: Message[] = [];

      if (is.array(file.conversations)) {
         console.log(
            `Found ${
               file.conversations.length
            } Hangouts conversations in ${fileName}`
         );

         /** All conversations involving the configured people */
         const relevant = file.conversations.filter(c =>
            match.all(
               c.conversation.conversation.participant_data.map(
                  p => p.fallback_name
               )
            )
         );

         console.log(`Found ${relevant.length} relevant conversations`);

         relevant.forEach(c => {
            const names: Map<string, string> = new Map();

            c.conversation.conversation.participant_data.forEach(p => {
               names.set(p.id.chat_id, p.fallback_name);
            });
            c.events
               .filter(e => e.event_type == 'REGULAR_CHAT_MESSAGE')
               .forEach(e => {
                  const msg = e.chat_message!;
                  msg.senderName = names.get(e.sender_id.chat_id);
               });
         });

         messages = relevant.reduce(
            (out: Message[], c) => {
               out = out.concat(c.events
                  .filter(
                     e =>
                        e.event_type == 'REGULAR_CHAT_MESSAGE' &&
                        is.value(e.chat_message) &&
                        is.array(e.chat_message.message_content.segment)
                  )
                  .map(parse)
                  .filter(m => m != null) as Message[]);

               return out;
            },
            [] as Message[]
         );

         console.log(`Converted ${messages.length} Hangouts messages`);
      } else {
         console.error(`No messages found in ${exportName}`);
      }
      return messages;
   },

   parse,

   sourceName: 'Google Hangouts'
};
