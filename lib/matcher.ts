import { is } from '@toba/tools';
import { people } from './config';
import { Person, Relation } from './types';
import { numbersOnly } from './tools';

function compare(
   value: string | null,
   matcher: (p: Person) => boolean
): Relation {
   if (is.empty(value)) {
      return Relation.None;
   }
   for (const key in people) {
      if (matcher(people[key])) {
         return parseInt(key);
      }
   }
   return Relation.None;
}

export const match = {
   /** Find person with name */
   name: (name: string | null) => compare(name, p => p.alias.includes(name!)),

   /** Whether relation exists with given name */
   exists: (name: string) =>
      compare(name, p => p.alias.includes(name!)) != Relation.None,

   /** Whether all relations are matched to names */
   all: (names: string[]) =>
      Object.keys(people).reduce((yes, key) => {
         if (yes) {
            const p: Person = people[key];
            return p.alias.filter(a => names.includes(a)).length > 0;
         }
         return false;
      }, true),

   /** Find person with e-mail */
   email: (email: string | null) =>
      compare(email, p => p.email.includes(email!)),

   /** Find person with phone number */
   phone: (phone: string | null) =>
      compare(phone, p => {
         const num = numbersOnly(phone);
         return p.phone.find(p => num!.includes(p)) !== undefined;
      })
};
