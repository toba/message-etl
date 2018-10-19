import { is } from '@toba/tools';
import { people } from './config/';
import { Person } from './types';

function nameMatch(
   value: string | null,
   matcher: (p: Person) => boolean
): string | null {
   if (is.empty(value)) {
      return null;
   }
   for (const key in people) {
      const p = people[key];
      if (matcher(p)) {
         return p.name;
      }
   }
   return null;
}

export const match = {
   /** Find person with name */
   name: (name: string | null) => nameMatch(name, p => p.alias.includes(name!)),

   /** Find person with e-mail */
   email: (email: string | null) =>
      nameMatch(email, p => p.email.includes(email!)),

   /** Find person with phone number */
   phone: (phone: string | null) =>
      nameMatch(phone, p => p.phone.includes(phone!.replace(/\D/g, ''))),

   /** Find person with relation type */
   relation: (r: number): string | null => {
      const p = people[r];
      return is.value(p) ? p.name : null;
   }
};
