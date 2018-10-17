import { Adapter, Message, Source } from '../types';

export const mailbox: Adapter = {
   filter(fileName: string) {
      return true;
   },
   
   process(fileNames[]: string) {
      return null;
   },
   source: Source.GMail
};
