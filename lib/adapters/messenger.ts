import { Adapter, Message, Source } from '../types';

export const facebookMessenger: Adapter = {
   filter(fileName: string) {
      return true;
   },

   process(path: string) {
      return null;
   },
   source: Source.FacebookMessenger
};
