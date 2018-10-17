import { is } from '@toba/tools';
import { parse as htmlParse, HTMLElement } from 'node-html-parser';
import { Adapter, Message, Source } from '../types';

const re = /^(?! -).* - (Voicemail|Text) - \d{4}-\d{2}-\d{2}T\d{2}_(\d{2}_\d{2})?\.html$/;

export function nodeValue(
   el: HTMLElement,
   selector: string,
   attribute: string | null = null
): string | null {
   const thing = el.querySelector(selector) as HTMLElement;

   if (is.value(thing)) {
      if (attribute !== null) {
         if (is.defined(thing.attributes, attribute)) {
            return thing.attributes[attribute];
         }
      } else {
         return thing.innerHTML;
      }
   }

   return null;
}

function parse(el: HTMLElement): Message | null {
   const time = nodeValue(el, '.dt', 'title');
   const from = nodeValue(el, '.fn');
   const tel = nodeValue(el, '.tel');
   const text = nodeValue(el, 'q');

   return time !== null && from !== null && tel !== null && text !== null
      ? {
           source: Source.GoogleVoice,
           from,
           to: 'to',
           on: new Date(time),
           text
        }
      : null;
}

export const googleVoice: Adapter = {
   filter: (fileName: string) => re.test(fileName),

   process(fileText: string) {
      const html = htmlParse(fileText);
      const messages = html.querySelectorAll('.hChatLog .message');
      return is.array(messages)
         ? messages.map(el => parse(el as HTMLElement)).filter(m => m !== null)
         : [];
   },

   parse,

   sourceName: 'Google Voice'
};
