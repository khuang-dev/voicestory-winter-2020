import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import VideoList from '../../components/VideoList';

const Videos = ({navigation}) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity>
          <Text>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Most Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Video')}>
          <Text>Theme</Text>
        </TouchableOpacity>
      </View>
      <VideoList />
    </>
  );
};

export default Videos;
