import '@toba/test';
import { readFileText } from '@toba/test';
import { parse as parseHTML } from 'node-html-parser';
import { gv } from './index';
import { Source, Relation } from '../types';

jest.mock('../config/index');

const name = 'Other Hyphen-Name';
const raw = `<div class="message">
   <abbr class="dt" title="2013-06-17T20:46:00.861-04:00">Jun 17, 2013, 8:46:00 PM Eastern Time</abbr>:
      <cite class="sender vcard">
         <a class="tel" href="tel:+12087242867">
            <span class="fn">First Last-Hyphen</span>
         </a>
      </cite>:
      <q>Flight 2244, 15 minutes delayed, also had to check in bag because Carolyn bought Kayla and I stuff from bath
      &amp; body works</q>
   </div>`;

test('matches file names', () => {
   [
      `${name} - Text - 2012-01-29T04_57_07.html`,
      `${name} - Text - 2012-01-29T04_57_07.html`,
      `${name} - Voicemail - 2010-10-30T01_.html`,
      `${name} - Text - 2012-09-25T23_19_11.html`
   ].forEach(n => {
      expect(gv.filter(n)).toBe(true);
   });

   [
      `Family-Name.mbox`,
      `message.json`,
      `${name} - Voicemail - 2010-10-30T01_.mp3`
   ].forEach(n => {
      expect(gv.filter(n)).toBe(false);
   });
});

test('parses single message', () => {
   const html = parseHTML(raw);
   const msg = gv.parse(html);

   expect(msg).toEqual({
      source: Source.GoogleVoice,
      from: Relation.Other,
      on: new Date(2013, 5, 17, 18, 46, 0, 861),
      text: `Flight 2244, 15 minutes delayed, also had to check in bag because Carolyn bought Kayla and I stuff from bath
      & body works`
   });
});

test('parses file', async () => {
   const text = await readFileText(`${__dirname}/__mocks__/sms.html`);
   const messages = gv.process(text, 'mock');

   expect(messages).toBeInstanceOf(Array);
   expect(messages).toHaveLength(10);
   expect(messages[0].from).toBe(Relation.Other);
   expect(messages[1].from).toBe(Relation.Self);
   expect(messages[8].text).toBe('Superman? Home in 15');
   expect(messages[9].text).toBe('At park for a bit, signed papers');

   expect(messages).toMatchSnapshot();
});

test('parses file with single message', async () => {
   const text = await readFileText(`${__dirname}/__mocks__/sms2.html`);
   const messages = gv.process(text, 'shorty');

   expect(messages).toBeInstanceOf(Array);
   expect(messages).toHaveLength(1);
   expect(messages[0].from).toBe(Relation.Other);
   //expect(messages[0].on).toEqual(new Date(2012, 8, 25, 19, 19, 11, 272));
   expect(messages[0].text).toBe('At park for a bit, signed papers');

   expect(messages).toMatchSnapshot();
});
