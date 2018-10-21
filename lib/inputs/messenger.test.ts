import '@toba/test';
import { readFileText } from '@toba/test';
import { fb } from './index';
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
      text: 'SPOILED monster.',
      on: new Date(source.timestamp_ms)
   };

   expect(fb.parse(source)).toEqual(target);
});

test('converts reations', () => {
   const source: Facebook.Message = {
      sender_name: 'Self Person',
      timestamp_ms: 1539657593609,
      content: 'Cats new hiding spot',
      reactions: [
         {
            reaction: '\u00f0\u009f\u0098\u0086',
            actor: 'Other Person'
         }
      ],
      type: 'Generic'
   };
   const target: Message = {
      source: Source.FacebookMessenger,
      from: Relation.Self,
      text: source.content,
      on: new Date(source.timestamp_ms),
      reaction: '😆'
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
   // https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/44421673_282973895759309_2240446406940688384_n.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=c0381320ba6fdce9117a3ec9c65e5295&oe=5C41F255
   expect(fb.parse(source)).toEqual(target);
});
