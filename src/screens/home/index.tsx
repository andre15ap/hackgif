import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {mockGifs, Gif} from '../../services/api';
import GifComponent from '../../components/gif';

import {Container} from './styles';

function HomeScreen() {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const renderItem = (item: Gif, index: number) => {
    console.log(index);
    return <GifComponent url={item.gif_url} position={index} />;
  };

  const getGifs = () => {
    const response = mockGifs();
    setGifs(response);
  };

  useEffect(() => {
    getGifs();
  }, []);
  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={gifs}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </Container>
  );
}

export default HomeScreen;
