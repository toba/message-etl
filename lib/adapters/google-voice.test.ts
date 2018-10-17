import '@toba/test';
import { readFileText } from '@toba/test';
import { parse as parseHTML } from 'node-html-parser';
import { googleVoice as gv } from './google-voice';
import { Source } from '../types';

const name = 'Anybody Hyphen-Name';
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
      `${name} - Voicemail - 2010-10-30T01_.html`
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
      from: 'First Last-Hyphen',
      to: null,
      on: new Date(2013, 5, 17, 18, 46),
      text:
         'Flight 2244, 15 minutes delayed, also had to check in bag because Carolyn bought Kayla and I stuff from bath & body works'
   });
});

test('parses file', async () => {
   const text = await readFileText(`${__dirname}/__mocks__/sms.html`);
   const messages = gv.process(text);

   expect(messages).toBeDefined();
});
