import '@toba/test';
import MBox = require('node-mbox');
import { simpleParser, ParsedMail } from 'mailparser';
import * as path from 'path';
import { mb } from './index';
import { Source, Relation, Message } from '../types';
import { mail as mockMail } from './__mocks__/mail';

jest.mock('../config/index');

let mail: ParsedMail[] = [];

beforeAll(done => {
   const parsers: Promise<ParsedMail>[] = [];
   const mbox = new MBox(
      path.join(__dirname, '__mocks__', 'Family-Other.mbox')
   );

   mbox.on('message', async (msg: Buffer) => {
      parsers.push(simpleParser(msg));
   });

   mbox.on('end', () => {
      Promise.all(parsers).then(m => {
         mail = m;
         done();
      });
   });
});

test('imports messages', () => {
   expect(mail).toHaveLength(26);
});

test('parses mail', () => {
   const target: Message = {
      source: Source.GMail,
      on: new Date(),
      from: Relation.Other,
      text: ''
   };
   expect(mb.parse(mail[0])).toEqual(target);
});
