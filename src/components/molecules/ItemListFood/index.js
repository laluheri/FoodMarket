import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FoodDummy1} from '../../../assets';
import Ratting from '../Ratting';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemListFood = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={{flex: 1}}>
          <Text style={styles.text}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        <Ratting />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
