import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';

export default function Slider({images}) {
  const [active, setActive] = useState(0);
  const width = useWindowDimensions().width;
  const height = width * 0.6; // 60%;
  const change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={{width, height}}>
      <ScrollView
        horizontal
        paginEnabled
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image) => (
          <Image
            key={image.id}
            style={{width, height, resizeMode: 'cover'}}
            source={{uri: `${image.media}`}}
          />
        ))}
      </ScrollView>
      <View style={styles.container}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k === active ? styles.activeText : styles.pagingText}>
            {'\u2B24'}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: 20,
    color: '#888',
    margin: 3,
  },
  activeText: {
    fontSize: 20,
    color: '#0062FF',
    margin: 3,
  },
});
