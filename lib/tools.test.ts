import '@toba/test';
import { aboutMoney } from './tools';

test('indicates message is about money', () => {
   [
      'yeah, but it will be a few months before she gets the money',
      'takes time to refinance and get equity line of credit',
      'in the mean time she bought a 23K car on a 29K salary',
      'i just mowed the lawn and am here doing finances -- trying to get all the little chores out of the way before the weekend',
      'When you have time later please do the credit card transfer. It can take a day and I don’ want to be stranded at 7am in Seattle and miss my conferene. I',
      'i’m fine with it. it probably means the $900 insurance savings is used up and we’ll have to make do with what’s in our accounts',
      'I saw a 321 withdrawal. Anyway,',
      'I withdrew 421 total for kids registration',
      'no worries. i didn’t even know you had access to my account.'
   ].forEach(t => {
      expect(aboutMoney(t)).toBe(true);
   });

   [
      'for giving me so much credit',
      'corporate audit, not only was one there when i came back from a bank run and another store, but then i had to go pick up the second!'
   ].forEach(t => {
      expect(aboutMoney(t)).toBe(false);
   });
});
