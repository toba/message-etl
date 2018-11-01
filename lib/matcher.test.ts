import '@toba/test';
import { match } from './matcher';
import { Relation } from './types';

jest.mock('./config/index');

test('matches name', () => {
   expect(match.name('Self Person')).toBe(Relation.Self);
   expect(match.name('Me')).toBe(Relation.Self);
   expect(match.name('Other Hyphen-Name')).toBe(Relation.Other);
   expect(match.name('Other Nope')).toBe(Relation.None);
});

test('matches e-mail', () => {
   expect(match.email('self@trailimage.com')).toBe(Relation.Self);
   expect(match.email('selzzf@trailimage.com')).toBe(Relation.None);
});

test('matches phone', () => {
   expect(match.phone('1011234567')).toBe(Relation.Self);
   expect(match.phone('+1-101-1234567')).toBe(Relation.Self);
   expect(match.phone('2001234567')).toBe(Relation.Other);
   expect(match.phone('200123884567')).toBe(Relation.None);
});

test('confirms match to all relations', () => {
   expect(match.all(['Me', 'Other'])).toBe(true);
   expect(match.all(['Me', 'Other', 'Extra'])).toBe(true);
   expect(match.all(['Self Person', 'Other', 'Extra'])).toBe(true);
   expect(match.all(['Me', 'Extra'])).toBe(false);
});
