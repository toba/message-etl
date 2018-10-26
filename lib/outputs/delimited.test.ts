import '@toba/test';
import { readFileText } from '@toba/test';
import { fb } from '../inputs/';
import { delimited as d } from './delimited';
import { messages } from './__mocks__/messages';

jest.mock('../config/index');

test('serializes message', () => {
   expect(d.serialize(messages[0])).toMatchSnapshot();
});

test('generates delimited file', async () => {
   const text = await readFileText(
      `${__dirname}/../inputs/__mocks__/message.json`
   );
   const messages = fb.process(text);
   const file = d.write(messages);

   expect(file).toMatchSnapshot();
});
