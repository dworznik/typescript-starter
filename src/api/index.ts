import fetch from 'cross-fetch';

export const apiCall = (url: string): Promise<any> => fetch(url);
