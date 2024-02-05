// Import React and other dependencies
import React from 'react';
import { Image,View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';


type ThumbnailListProps = {
  scrollViewRef: React.RefObject<ScrollView>;
  scrollEnabled: boolean;
  thumbnails: {
    [key: string]: number;
  }
  currentTime: number
};

const ThumbnailList: React.FC<ThumbnailListProps> = React.memo(({ scrollViewRef, scrollEnabled,thumbnails, currentTime }) => {
  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      scrollEnabled={scrollEnabled}
      style={{}}
    >
      <View style={{flexDirection: 'row'}}>
      {Array.from({ length: 193}, (_, i) => (
        <TouchableOpacity
          key={i}
        >
          <Image source={thumbnails[`thumbnail-${i}`]} style={styles.image} />
          <View style={[styles.overlay,{
            backgroundColor: currentTime > i ? 'rgba(100, 130, 183, 0.5)' : 'none',
          }]}></View>
        </TouchableOpacity>
      ))}
      </View>
     
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: 50,
  },
  image: {
    width: 200,
    height: 50
  },
});

export default ThumbnailList;
