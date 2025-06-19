import ErrorRepository from '../ErrorRepository';

const dataList = [
  [404, 'Not found'],
  [1000, 'Unknown error'],
];

const handler = test.each(dataList);

handler('testing translate method with %i error code', (code, errorText) => {
  const repo = new ErrorRepository();
  repo.errors.set(404, 'Not found');
  expect(repo.translate(code)).toBe(errorText);
});
