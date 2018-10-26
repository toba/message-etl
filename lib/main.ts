import * as fs from 'fs';
import { is } from '@toba/tools';
import { Message, Reader, Writer } from './types';
import { fb, gv } from './inputs/index';
import { delimited } from './outputs/index';

const inputs: Reader[] = [fb, gv];
const outputs: Writer[] = [delimited];

function main(path: string) {
   if (is.empty(path)) {
      fail('Must specify path containing messages');
   }

   const messages: Message[] = [];

   fs.readdir(path, (err, fileNames) => {
      if (is.value(err)) {
         fail(err);
      }
      inputs.forEach(a => {
         messages.concat(
            ...fileNames
               .filter(f => a.filter(f))
               .map(f => a.process(fs.readFileSync(f, 'utf8')))
         );
      });

      messages.sort((m1, m2) => (m1.on > m2.on ? 1 : -1));

      outputs.forEach(o => {
         const text = o.write(messages);
         fs.writeFileSync(o.fileName, text);
      });
   });
}

function fail(msg: string | NodeJS.ErrnoException) {
   console.error(msg);
   process.exit(-1);
}

main(process.argv[2]);
