// Import React and other dependencies
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video, {VideoRef, OnLoadData, OnProgressData, ReactVideoSource } from 'react-native-video';

type VideoPlayerProps = {
  videoRef: React.RefObject<VideoRef>;
  paused: boolean;
  onLoad: (data: OnLoadData) => void;
  onProgress: (progress: OnProgressData) => void;
  onPress: () => void;
  videoUrl: ReactVideoSource;
};

const Player = ({ videoRef, paused, onLoad, onProgress, onPress,videoUrl }: VideoPlayerProps) => {
  return (
    <View style={styles.videoContainer}>
      <Video
        source={videoUrl}
        ref={videoRef}
        style={styles.video}
        onBuffer={() => console.log("Buffering...")}
        onError={(error) => console.error(error)}
        paused={paused}
        onLoad={onLoad}
        onProgress={onProgress}
      />
      <TouchableOpacity onPress={onPress} style={styles.playPauseButton}>
        {paused &&
        <Text style={styles.playPauseText}>Pause</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    position: 'relative',
  },
  video: {
    width: '100%',
    height: 200,
  },
  playPauseButton: {
    top: 0,
    width: '100%',
    height: 200,
    padding: 10,
    position: 'absolute',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playPauseText: {
    color: 'black',
    fontSize: 24,
    backgroundColor: '#ccc',
    padding: 10
  },
});

export default Player;
