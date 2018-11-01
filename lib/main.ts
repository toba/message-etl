import * as fs from 'fs';
import * as path from 'path';
import { is } from '@toba/tools';
import { Message, Reader, Writer } from './types';
import { fb, gv, passport, chat, hangouts } from './inputs/index';
import { text } from './outputs/index';
import { deduplicate } from './tools';

const inputs: Reader[] = [fb, gv, passport, chat, hangouts];
const outputs: Writer[] = [text];

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
               .map(f =>
                  a.process(fs.readFileSync(path.join(dir, f), 'utf8'), f)
               )
         );
      });

      if (messages.length > 0) {
         console.log(`Parsed ${messages.length} messages`);

         messages.sort((m1, m2) => m1.on.getTime() - m2.on.getTime());
         const before = messages.length;
         messages = deduplicate(messages);

         console.log(`Removed ${before - messages.length} duplicate messages`);

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
