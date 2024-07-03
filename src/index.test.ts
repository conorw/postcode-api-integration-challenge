import { describe, it, expect } from 'vitest';
import { searchPostcode } from './lib/postcodes';
describe('Postcode tests', () => {
	it('A empty postcode should throw an exception', () => {
		expect(() => searchPostcode('')).rejects.toThrow('Postcode is required');
	});
	it('A invalid 123 postcode should throw an exception', () => {
		expect(() => searchPostcode('123')).rejects.toThrow('Invalid postcode');
	});
	it('A invalid bt%^ postcode should throw an exception', () => {
		expect(() => searchPostcode('bt%^')).rejects.toThrow('Invalid postcode');
	});
	it('A valid postcode BT48 7AL should return a result', async () => {
		const result = await searchPostcode('BT48 7AL');
		console.log(result);
		expect(result.postcode).toBe('BT48 7AL');
	});
	it('A valid postcode BT487AL should return a result', async () => {
		const result = await searchPostcode('BT487AL');
		console.log(result);
		expect(result.postcode).toBe('BT48 7AL');
	});
	it('A valid postcode bt487al should return a result', async () => {
		const result = await searchPostcode('bt487al');
		console.log(result);
		expect(result.postcode).toBe('BT48 7AL');
	});
});
