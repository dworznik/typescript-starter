import fetch from 'isomorphic-fetch';

export const apiCall = (url: string): Promise<any> => fetch(url);
