import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, Animated} from 'react-native';

import {getListGifs, getNextPageGifs, updateGif, Gif} from '../../services/api';
import {setVoteGifs} from '../../services/votesService';

import COLORS from '../../librarys/colors';

import Header from '../../components/header';
import GifComponent from '../../components/gif';
import CustomText from '../../components/customText';
import Loading from '../../components/loading';

import {Container, Button} from './styles';

function HomeScreen() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [loading, setLoading] = useState(false);

  const [scrollY] = useState(new Animated.Value(0));

  const updateServer = async (git: Gif) => {
    setLoading(true);
    const result = await updateGif(git);
    if (result) {
      const newGifs = setVoteGifs(git, gifs);
      setGifs(newGifs);
    }
    setLoading(false);
  };

  const handleUp = (item: Gif) => {
    const newGif = {...item, votes: item.votes + 1};
    updateServer(newGif);
  };

  const handleDown = async (item: Gif) => {
    const newGif = {...item, votes: item.votes - 1};
    updateServer(newGif);
  };

  const renderItem = (item: Gif, index: number) => {
    return (
      <GifComponent
        url={item.gif_url}
        position={index}
        votes={item.votes}
        loading={loading}
        actionUp={() => handleUp(item)}
        actionDown={() => handleDown(item)}
      />
    );
  };

  const getNextPage = async () => {
    if (!nextPage) return;
    const response = await getNextPageGifs(nextPage);
    if (response) {
      setGifs([...gifs, ...response.gifs]);
      setNextPage(response.next);
    }
  };

  const getResponseGifs = async () => {
    setLoading(true);
    const response = await getListGifs();
    if (response) {
      setGifs(response.gifs);
      setNextPage(response.next);
    }
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
      {loading && !gifs.length && <Loading />}
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={gifs}
        renderItem={({item, index}) => renderItem(item, index)}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getResponseGifs} />
        }
        scrollEnabled={!loading}
        onEndReachedThreshold={0.3}
        onEndReached={getNextPage}
        ListFooterComponent={nextPage ? <Loading /> : null}
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
