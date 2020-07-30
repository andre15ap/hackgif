import axios from 'axios';

export interface Gif {
  gif_url: string;
  votes: number;
  id: string;
}

const baseUrl = 'https://gitlab.com/loeffa/very-smart-api/-/raw/master';

const API = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export async function getListGifs() {
  try {
    const response = await API.get('/hacker-gifs');
    return response.data.results;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export function mockGifs(): Gif[] {
  return [
    {
      gif_url:
        'https://media.tenor.com/images/6bf4a4058e6fc6aec8e43d8b30a64bf3/tenor.gif',
      votes: 0,
      id: '0',
    },
    {
      gif_url:
        'https://media.tenor.com/images/b23a908ae01021bc1064937bad061b11/tenor.gif',
      votes: 0,
      id: '1',
    },
    {
      gif_url:
        'https://media.tenor.com/images/3d190af70cfeea404f796f869f46a3c3/tenor.gif',
      votes: 0,
      id: '2',
    },
    {
      gif_url:
        'https://media.tenor.com/images/505ddb5e0b0e8c3e96b66e1469ef47c1/tenor.gif',
      votes: 0,
      id: '3',
    },
    {
      gif_url:
        'https://media.tenor.com/images/831e35c8d65086bb791967e638d7bf25/tenor.gif',
      votes: 0,
      id: '4',
    },
    {
      gif_url:
        'https://media.tenor.com/images/f72cb542d6b3e3c3421889e0a3d9628d/tenor.gif',
      votes: 0,
      id: '5',
    },
    {
      gif_url:
        'https://media.tenor.com/images/94797255e294f4c4a23887c86c192f95/tenor.gif',
      votes: 2,
      id: '6',
    },
    {
      gif_url:
        'https://media.tenor.com/images/c16813c33283d6b86e1585fe0d991f55/tenor.gif',
      votes: 0,
      id: '7',
    },
    {
      gif_url:
        'https://media.tenor.com/images/85a9b4c6fcd7e9e689d8448749fb8ad8/tenor.gif',
      votes: 0,
      id: '8',
    },
    {
      gif_url:
        'https://media.tenor.com/images/2646a7138a777d0902f1bf5f0ca15931/tenor.gif',
      votes: 2,
      id: '9',
    },
  ];
}
