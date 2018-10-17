import '@toba/test';
import { readFileText } from '@toba/test';
import { HTMLElement } from 'node-html-parser';
import { googleVoice as gv } from './google-voice';

const name = 'Anybody Hyphen-Name';

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

test('parses file', async () => {
   const text = await readFileText(`${__dirname}/__mocks__/sms.html`);
   const messages = gv.process(text);

   expect(messages).toBeDefined();
});
