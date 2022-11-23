import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ratting from '../../components/molecules/Ratting';
import {Button, Counter} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('MainApp')}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healty</Text>
              <Ratting />
            </View>
            <View>
              <Counter />
            </View>
          </View>
          <Text style={styles.desc}>
            Baca pendapat dan lihat foto dari pengunjung mengenai makanan di
            Wiki Koffie, Braga, Bandung. Lihat juga menu dan informasi lengkap
            jam buka
          </Text>
          <Text style={styles.label}>Ingredient:</Text>
          <Text style={styles.desc}>Selederi, terlur, blueberry, madu</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR. 12.890.000</Text>
          </View>
          <View style={styles.button}>
            <Button text="Order Now" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  mainContent: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  priceContainer: {flex: 1},
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
