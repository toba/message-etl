import { Adapter, Message, Source } from '../types';

export const facebookMessenger: Adapter = {
   filter: (fileName: string) => fileName == 'message.json',

   process(text: string) {
      return [
         {
            source: Source.FacebookMessenger,
            from: 'from',
            to: 'to',
            on: new Date(),
            text
         }
      ] as Message[];
   },

   sourceName: 'Facebook Messenger'
};
