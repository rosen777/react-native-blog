import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route, navigation}) => {
  const {state} = useContext(Context);

  const blogPost = state.find(
    (post) => post.id === route?.params?.id ?? Math.floor(Math.random() * 9999),
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
