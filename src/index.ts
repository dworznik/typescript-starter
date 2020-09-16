import { apiCall } from 'api';

export const run = (): boolean => true;

export const apiRun = async (url: string): Promise<any> => {
  const ret = await apiCall(url);
  return ret.json();
};
