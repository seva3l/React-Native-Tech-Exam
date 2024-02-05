import React, { useState, useEffect, useRef } from 'react';
import { View,ScrollView  } from 'react-native';
import Player from './components/Player';
import ThumbnailList from './components/ThumbnailList';
import {VideoRef, ReactVideoSource} from 'react-native-video';
import IMAGES from '../../../assets/files';
import styles from './_styles';

type VideoPlayerProps = {
  videoUrl: ReactVideoSource;
  thumbnails: {
    [key: string]: number;
  }
};


const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnails,videoUrl }) => {
  const [paused, setPaused] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const videoRef = useRef<VideoRef>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleLoad = (data: { duration: React.SetStateAction<number>, currentTime: React.SetStateAction<number> }) => {
    setCurrentTime(data.currentTime);
    setPaused(false);
  };

  const handleTogglePlay = () => {
    setPaused(!paused);
    setScrollEnabled(!scrollEnabled);
  };

  const handleProgress = (progress: { currentTime: React.SetStateAction<number> }) => {
    const currentTime = progress.currentTime;
    setCurrentTime(currentTime);
  };

  useEffect(()=>{
    scrollViewRef.current?.scrollTo({
      x: (currentTime / 1) * 200,
      animated: true
    });
  },[currentTime]);

  return (
    <View style={styles.container}>
      <Player
        videoRef={videoRef}
        paused={paused}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onPress={handleTogglePlay}
        videoUrl={videoUrl}
      />
      <ThumbnailList
        scrollViewRef={scrollViewRef}
        scrollEnabled={scrollEnabled}
        thumbnails={IMAGES}
        currentTime={currentTime}
      />
    </View>
  );
};


export default VideoPlayer;
