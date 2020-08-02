import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, Animated} from 'react-native';

import {getListGifs, Gif} from '../../services/api';
import {setVoteGifs} from '../../services/votesService';

import COLORS from '../../librarys/colors';

import Header from '../../components/header';
import GifComponent from '../../components/gif';
import CustomText from '../../components/customText';

import {Container, Button} from './styles';

function HomeScreen() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);

  const [scrollY] = useState(new Animated.Value(0));

  const handleUp = (item: Gif) => {
    const newGif = {...item, votes: item.votes + 1};
    const newGifs = setVoteGifs(newGif, gifs);
    setGifs(newGifs);
  };

  const handleDown = (item: Gif) => {
    const newGif = {...item, votes: item.votes - 1};
    const newGifs = setVoteGifs(newGif, gifs);
    setGifs(newGifs);
  };

  const renderItem = (item: Gif, index: number) => {
    return (
      <GifComponent
        url={item.gif_url}
        position={index}
        votes={item.votes}
        actionUp={() => handleUp(item)}
        actionDown={() => handleDown(item)}
      />
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
      <Header scrollY={scrollY} />
      {!loading && !gifs.length && (
        <Button onPress={getResponseGifs}>
          <CustomText color={COLORS.WHITE} size={20}>
            Tentar novamente
          </CustomText>
        </Button>
      )}
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={gifs}
        renderItem={({item, index}) => renderItem(item, index)}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getResponseGifs} />
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: false},
        )}
      />
    </Container>
  );
}

export default HomeScreen;
