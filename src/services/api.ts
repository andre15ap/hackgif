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

function ordenateVotes(votes: Gif[]) {
  const ordenates = votes.sort((a, b) => {
    if (a.votes < b.votes) {
      return 1;
    }
    if (a.votes > b.votes) {
      return -1;
    }
    return 0;
  });
  return ordenates;
}

export async function getListGifs() {
  try {
    const response = await API.get('/hacker-gifs');
    return ordenateVotes(response.data.results);
  } catch (e) {
    console.log(e);
    return [];
  }
}
