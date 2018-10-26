import { lipsum } from '@toba/test';
import { Message, Relation, Source } from '../../types';

export const messages: Message[] = [
   {
      from: Relation.Self,
      on: new Date(2014, 5, 12),
      text: lipsum,
      source: Source.FacebookMessenger
   }
];
