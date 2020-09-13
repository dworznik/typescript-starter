import fetch from 'isomorphic-fetch';
export const run = () => true;

export const apiRun = async (url: string): Promise<any> => {
  const ret = await fetch(url);
  return await ret.json();
}
