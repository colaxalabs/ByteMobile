import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  useWindowDimensions,
  Text,
} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

export default function Slider({images}) {
  const [active, setActive] = useState(0);
  const width = useWindowDimensions().width;
  function renderItem({item, index}, parallaxProps) {
    return (
      <View key={item.id} style={{width, height: width * 0.6}}>
        <ParallaxImage
          source={{uri: item.media}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.3}
          {...parallaxProps}
        />
      </View>
    );
  }

  return images.length > 0 ? (
    <View>
      <Carousel
        layout={'default'}
        layoutCardOffset={18}
        sliderWidth={width}
        sliderHeight={width * 0.6}
        itemWidth={width}
        slideStyle={{width}}
        data={images}
        renderItem={renderItem}
        hasParallaxImages={true}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActive(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={active}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No Restaurant Images</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {
    backgroundColor: '#888',
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
});
