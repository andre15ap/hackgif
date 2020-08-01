import {Gif} from './api';

export function ordenateVotes(votes: Gif[]): Gif[] {
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

export function setVoteGifs(item: Gif, votes: Gif[]): Gif[] {
  const newGifs = votes.map((value) => {
    return value.id === item.id ? item : value;
  });
  console.log(item);

  return ordenateVotes(newGifs);
}
