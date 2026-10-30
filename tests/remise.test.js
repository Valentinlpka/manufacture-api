const { appliquerRemise } = require('../src/remise');

test('10 % de remise sur 100 euros donnent 90 euros', () => {
  expect(appliquerRemise(100, 10)).toBe(90);
});

test('25 % de remise sur 200 euros donnent 150 euros', () => {
  expect(appliquerRemise(200, 25)).toBe(150);
});

test('une remise de plus de 100 % est refusee', () => {
  expect(() => appliquerRemise(100, 150)).toThrow('Remise invalide');
});

test('une remise negative est refusee', () => {
  expect(() => appliquerRemise(100, -5)).toThrow('Remise invalide');
});
