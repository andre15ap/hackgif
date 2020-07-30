import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {getListGifs, Gif} from '../../services/api';

import GifComponent from '../../components/gif';

import {Container} from './styles';

function HomeScreen() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);

  const renderItem = (item: Gif, index: number) => {
    return (
      <GifComponent url={item.gif_url} position={index} votes={item.votes} />
    );
  };

  const getResponseGifs = async () => {
    setLoading(true);
    const response = await getListGifs();
    setGifs(response);
    setLoading(false);
  };

  useEffect(() => {
    getResponseGifs();
  }, []);
  return (
    <Container>
      {/* {loading && <Loading />} */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={gifs}
        renderItem={({item, index}) => renderItem(item, index)}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getResponseGifs} />
        }
      />
    </Container>
  );
}

export default HomeScreen;
