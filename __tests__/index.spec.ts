import { apiRun, run } from 'src/index';
import fetch from './helpers/fetch';

test('run', () => {
  expect(run()).toEqual(true);
});

test('api run', async () => {
  fetch.mock(/^https:\/\/hostname.*$/, { value: 42 });
  const ret = await apiRun('https://hostname');
  expect(ret.value).toEqual(42);
});
