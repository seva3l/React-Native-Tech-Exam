import { View } from 'react-native'
import React from 'react'
import VideoPlayer from '@components/VideoPlayer'
import styles from './_styles'
import IMAGES from '../../../assets/files'

export default function UIScreen() {
  const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  return (
    <View style={styles.container}>
      <VideoPlayer 
      videoUrl={{uri: VIDEO_URL}}
      thumbnails={IMAGES}
      />
    </View>
  )
}