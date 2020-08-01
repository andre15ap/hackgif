import axios from 'axios';

import {ordenateVotes} from './votesService';

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

export async function getListGifs() {
  try {
    const response = await API.get('/hacker-gifs');
    const gifs = response.data.results;
    return PRODUCTION ? gifs : ordenateVotes(gifs);
  } catch (e) {
    Alert(
      'Erro',
      'Algo inexperado aconteceu verifique sua conexão com a internet e tente novamvente :(',
    );
    console.log(e);
    return [];
  }
}
