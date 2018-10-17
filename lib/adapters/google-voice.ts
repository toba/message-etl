import { Adapter, Message, Source } from '../types';

export const googleVoice: Adapter = {
   filter(fileName: string) {
      return true;
   },
   
   process(fileNames: string[]) {
      return [];
   },
   source: Source.GoogleVoice
};
