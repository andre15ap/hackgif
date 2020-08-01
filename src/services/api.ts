import axios from 'axios';

import Alert from '../components/alert';

export interface Gif {
  gif_url: string;
  votes: number;
  id: number;
}

const PRODUCTION = false;

const URL_PRODUCTION = 'https://hackgif.herokuapp.com/api';
const URL_DEVELOP = 'https://gitlab.com/loeffa/very-smart-api/-/raw/master';

const API = axios.create({
  baseURL: PRODUCTION ? URL_PRODUCTION : URL_DEVELOP,
  timeout: 10000,
});

// function ordenateVotes(votes: Gif[]) {
//   const ordenates = votes.sort((a, b) => {
//     if (a.votes < b.votes) {
//       return 1;
//     }
//     if (a.votes > b.votes) {
//       return -1;
//     }
//     return 0;
//   });
//   return ordenates;
// }

export async function getListGifs() {
  try {
    const response = await API.get('/hacker-gifs');
    // return ordenateVotes(response.data.results);
    return response.data.results;
  } catch (e) {
    Alert(
      'Erro',
      'Algo inexperado aconteceu verifique sua conexão com a internet e tente novamvente :(',
    );
    console.log(e);
    return [];
  }
}
