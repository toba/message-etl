import '@toba/test';
import { match } from './matcher';

test('matches name', () => {
   expect(match.name('something')).toBe('name');
});

test('matches e-mail', () => {
   expect(match.email('something')).toBe('name');
});

test('matches phone', () => {
   expect(match.phone('something')).toBe('name');
});
