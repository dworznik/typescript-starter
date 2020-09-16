import { apiRun, run } from 'index';
import fetch from '@helpers/fetch';
import { readdirSync } from 'fs';

jest.mock('fs');

test('run', () => {
  expect(run()).toEqual(true);
});

test('api run', async () => {
  fetch.mock(/^https:\/\/hostname.*$/, { value: 42 });
  const ret = await apiRun('https://hostname');
  expect(ret.value).toEqual(42);
});

test('test mock', () => {
  expect(readdirSync('test')).toEqual(['foo', 'bar']);
});
