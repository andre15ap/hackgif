import axios from 'axios';

import Alert from '../components/alert';

export interface Gif {
  gif_url: string;
  votes: number;
  id: number;
}

const PRODUCTION = false;

const URL_PRODUCTION = 'https://hackgif.herokuapp.com/api';
const URL_DEVELOP = 'http://192.168.0.203:8000/api';

const API = axios.create({
  baseURL: PRODUCTION ? URL_PRODUCTION : URL_DEVELOP,
  timeout: 10000,
});

export async function getListGifs() {
  try {
    const response = await API.get('/hacker-gifs');
    const gifs = response.data.results;
    return gifs;
  } catch (e) {
    Alert(
      'Erro',
      'Algo inexperado aconteceu verifique sua conexão com a internet e tente novamvente :(',
    );
    console.log(e);
    return [];
  }
}

export async function updateGif(gif: Gif) {
  try {
    const {id} = gif;
    const data = {gif_url: gif.gif_url, votes: gif.votes};
    await API.put(`/hacker-gifs/${id}/`, data);
    return true;
  } catch (e) {
    Alert(
      'Erro',
      'Algo inexperado aconteceu verifique sua conexão com a internet e tente novamvente :(',
    );
    console.log(e);
    return false;
  }
}
