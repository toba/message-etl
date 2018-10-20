import * as fs from 'fs';
import { is } from '@toba/tools';
import { Message } from './types';
import { fb, gv, mb } from './adapters/index';

function main(path: string) {
   if (is.empty(path)) {
      fail('Must specify path containing messages');
   }

   const messages: Message[] = [];

   fs.readdir(path, (err, fileNames) => {
      if (is.value(err)) {
         fail(err);
      }
      [fb, gv, mb].forEach(a => {
         messages.concat(
            ...fileNames
               .filter(f => a.filter(f))
               .map(f => a.process(fs.readFileSync(f, 'utf8')))
         );
      });
   });
}

function fail(msg: string | NodeJS.ErrnoException) {
   console.error(msg);
   process.exit(-1);
}

main(process.argv[2]);
