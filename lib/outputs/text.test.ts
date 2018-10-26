import '@toba/test';
import { readFileText } from '@toba/test';

import { fb } from '../inputs/';
import { text } from './text';
import { messages } from './__mocks__/messages';

jest.mock('../config/index');

test('serializes message', () => {
   expect(text.serialize(messages[0])).toMatchSnapshot();
});

test('generates delimited file', async () => {
   const raw = await readFileText(
      `${__dirname}/../inputs/__mocks__/message.json`
   );
   const messages = fb.process(raw);
   const file = text.write(messages);

   expect(file).toMatchSnapshot();
});
