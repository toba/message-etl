import '@toba/test';
import { readFileText } from '@toba/test';
import { facebookMessenger as fb } from './messenger';
import { Source, Relation, Message, Facebook } from '../types';

jest.mock('../config/index');

test('converts standard message', () => {
   const source: Facebook.Message = {
      sender_name: 'Other Person',
      timestamp_ms: 1370872998841,
      content: 'SPOILED monster.\n',
      type: 'Generic'
   };
   const target: Message = {
      source: Source.FacebookMessenger,
      from: Relation.Other,
      text: source.content,
      on: new Date(source.timestamp_ms)
   };

   expect(fb.parse(source)).toEqual(target);
});

test('converts photo message', () => {
   const source: Facebook.Message = {
      sender_name: 'Self Person',
      timestamp_ms: 1539657585171,
      content: 'You sent a photo.',
      photos: [
         {
            uri:
               'messages/JessicaAbbott_ea77ad6afb/photos/44126872_2446710928889289_825560690738593792_n_2446710902222625.jpg',
            creation_timestamp: 1539657584
         }
      ],
      type: 'Generic'
   };
   const target: Message = {
      source: Source.FacebookMessenger,
      from: Relation.Self,
      text: source.content,
      on: new Date(source.timestamp_ms)
   };

   expect(fb.parse(source)).toEqual(target);
});
