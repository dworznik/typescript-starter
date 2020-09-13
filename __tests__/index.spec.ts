import { apiRun, run } from "src/index";
import fetchMock from 'jest-fetch-mock';

test('run', () => {
  expect(run()).toEqual(true);
})

test('api run', async () => {
  fetchMock.mockIf(/^https:\/\/hostname.*$/,
    req => Promise.resolve({
      status: 200,
      body: '{"value": 42}',
    }));
  const ret = await apiRun('https://hostname');
  expect(ret.value).toEqual(42);
});
