import '@toba/test';
import { readFileText } from '@toba/test';
import { passport } from './index';
import { Relation } from '../types';

jest.mock('../config/index');

test('matches file names', () => {
   ['other 2003-06-11 home.xml', 'other 2003-08-15 work.xml'].forEach(n => {
      expect(passport.filter(n)).toBe(true);
   });

   [
      'Family-Name.mbox',
      'message.json',
      'Other - Voicemail - 2010-10-30T01_.mp3',
      'other 2004-06-05 work.xml',
      'other 2003-09-13 home.xml',
      'other3008@hotmail.com.xml'
   ].forEach(n => {
      expect(passport.filter(n)).toBe(false);
   });
});

test('parses file', async () => {
   const text = await readFileText(`${__dirname}/__mocks__/passport.xml`);
   const messages = passport.process(text, 'mock');

   expect(messages).toBeInstanceOf(Array);
   expect(messages).toHaveLength(4);
   expect(messages[0].from).toBe(Relation.Other);
   expect(messages[1].from).toBe(Relation.Self);
   expect(messages[3].text).toBe('sorry, been on and still on the phone');

   expect(messages).toMatchSnapshot();
});
