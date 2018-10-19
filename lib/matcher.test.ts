import '@toba/test';
import { match } from './matcher';

jest.mock('./config/index');

test('matches name', () => {
   expect(match.name('Self Person')).toBe('Self');
   expect(match.name('Other Hyphen-Name')).toBe('Other');
});

test('matches e-mail', () => {
   expect(match.email('self@trailimage.com')).toBe('Self');
});

test('matches phone', () => {
   expect(match.phone('1011234567')).toBe('Self');
   expect(match.phone('+1-101-1234567')).toBe('Self');
   expect(match.phone('2001234567')).toBe('Other');
});
