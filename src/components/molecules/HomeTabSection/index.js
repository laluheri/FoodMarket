import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      width: 0.5,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTeste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => {
            navigation.navigate('FoodDetail');
          }}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => {
            navigation.navigate('FoodDetail');
          }}
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => {
            navigation.navigate('FoodDetail');
          }}
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => {
            navigation.navigate('FoodDetail');
          }}
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => {
            navigation.navigate('FoodDetail');
          }}
        />
      </View>
    </ScrollView>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
    </View>
  );
};
const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
      <ItemListFood
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}
      />
    </View>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Teste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTeste,
    2: Popular,
    3: Recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
