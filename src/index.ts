import fetch from 'isomorphic-fetch';

export const run = (): boolean => true;

export const apiRun = async (url: string): Promise<any> => {
  const ret = await fetch(url);
  return ret.json();
};
