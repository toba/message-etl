import { Adapter, Message, Source } from '../types';

const re = /[Z0-9]\.html$/;

export const mailbox: Adapter = {
   filter: (fileName: string) => re.test(fileName),

   process(text: string) {
      return [
         {
            source: Source.GoogleVoice,
            from: 'from',
            to: 'to',
            on: new Date(),
            text
         }
      ] as Message[];
   },

   sourceName: 'Google Mail'
};
