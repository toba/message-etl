import * as fs from 'fs';
import * as path from 'path';
import { is } from '@toba/tools';
import { Message, Reader, Writer } from './types';
import { fb, gv } from './inputs/index';
import { delimited } from './outputs/index';

const inputs: Reader[] = [fb, gv];
const outputs: Writer[] = [delimited];

function main(dir: string) {
   if (is.empty(dir)) {
      fail('Must specify path containing messages');
   }

   if (!fs.existsSync(dir)) {
      fail(`Path "${dir}" does not exist`);
   }

   let messages: Message[] = [];

   fs.readdir(dir, (err, fileNames) => {
      if (is.value(err)) {
         fail(err);
      }
      console.log(`Found ${fileNames.length} files`);

      inputs.forEach(a => {
         messages = messages.concat(
            ...fileNames
               .filter(f => a.filter(f))
               .map(f => a.process(fs.readFileSync(path.join(dir, f), 'utf8')))
         );
      });

      if (messages.length > 0) {
         console.log(`Parsed ${messages.length} messages`);

         messages.sort((m1, m2) => (m1.on > m2.on ? 1 : -1));

         outputs.forEach(o => {
            console.log(`Preparing to write ${o.fileName}`);
            const text = o.write(messages);
            fs.writeFileSync(o.fileName, text);
            console.log(`Finished writing ${o.fileName}`);
         });
      } else {
         console.log('Found no mesages');
      }
   });
}

function fail(msg: string | NodeJS.ErrnoException) {
   console.error(msg);
   process.exit(-1);
}

main(process.argv[2]);
