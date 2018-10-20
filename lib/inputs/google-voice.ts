import { is } from '@toba/tools';
import { parse as parseHTML, HTMLElement } from 'node-html-parser';
import { Adapter, Message, Source } from '../types';
import { match } from '../matcher';
import { numbersOnly } from '../tools';

const re = /^(?! -).* - (Voicemail|Text) - \d{4}-\d{2}-\d{2}T\d{2}_(\d{2}_\d{2})?\.html$/;

/**
 * Value of an element: either it's text content or an attribute value.
 */
export function nodeValue(
   element: HTMLElement,
   selector: string,
   attribute: string | null = null
): string | null {
   const el = element.querySelector(selector) as HTMLElement;

   if (is.value(el)) {
      if (attribute !== null) {
         if (is.defined(el.attributes, attribute)) {
            return el.attributes[attribute];
         }
      } else {
         return el.innerHTML;
      }
   }
   return null;
}

/**
 * Parse single messsage.
 */
function parse(el: HTMLElement): Message | null {
   const time = nodeValue(el, '.dt', 'title');
   const from = match.name(nodeValue(el, '.sender .fn'));
   const tel = numbersOnly(nodeValue(el, '.sender .tel', 'href'));
   const text = nodeValue(el, 'q');

   return time !== null && from !== null && tel !== null && text !== null
      ? {
           source: Source.GoogleVoice,
           from,
           on: new Date(time),
           text
        }
      : null;
}

export const googleVoice: Adapter = {
   filter: (fileName: string) => re.test(fileName),

   /**
    * Process exported file.
    */
   process(fileText: string) {
      const html = parseHTML(fileText);
      const messages = html.querySelectorAll('.hChatLog .message');
      return is.array(messages)
         ? (messages
              .map(el => parse(el as HTMLElement))
              .filter(m => m !== null) as Message[])
         : [];
   },

   parse,

   sourceName: 'Google Voice'
};
