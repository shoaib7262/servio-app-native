import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../assets';
import Swiper from 'react-native-swiper';
import {COLORS} from '../constants/theme';
import Button from '../constants/Button';
import { useNavigation } from '@react-navigation/native';

const WalkThrough = () => {
  const navigation = useNavigation();

  const walkThroughList = [
    {
      id: 1,
      title: 'BACHELOR BOOKING',
      description:
        'Now you can make a bachelor connection for working people and students using your personal proofs ',
      image: Images.screenOne,
    },
    {
      id: 2,
      title: 'BULK BOOKING',
      description:
        'Now you can book more than 2 cylinders for any special events with the simple Booking method',
      image: Images.screenTwo,
    },
    {
      id: 3,
      title: 'DATE & TIME',
      description:
        'You can schedule and reschedul Delivery date and time to your preference',
      image: Images.screenThree,
    },
    {
      id: 4,
      title: 'REFILLING STATION',
      description:
        'Refill your LPG at your nearby Gas station using out refill location service ',
      image: Images.screenFour,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.Skip}>
        <TouchableOpacity>
          <Text style={styles.skipStyle}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        paginationStyle={{position: 'absolute', bottom: '30%'}}
        activeDotColor="#0D0D0F">
        {walkThroughList.map(i => {
          return (
            <View
              key={i.id}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}>
              <Image source={i.image} style={styles.imagContainer} />
              <Text style={styles.textStyle}>{i.title}</Text>
              <Text style={styles.descriptionStyle}> {i.description} </Text>
              {i.id == 4 ? (
                <View style={styles.startButton}>
                  <Button name="Start" onPress={() => navigation.navigate('Login')} />
                </View>
              ) : (
                <View style={styles.startButton}>
                  <Button name="Next" />
                </View>
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  descriptionStyle: {
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  imagContainer: {
    position: 'absolute',
    top: 80,
    height: '30%',
    width: '90%',
    resizeMode: 'contain',
    // marginHorizontal:15
  },
  startButton: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Skip: {
    position: 'absolute',
    right: '5%',
  },
  skipStyle: {
    color: COLORS.screenBackground,
    fontWeight: 'bold',
  },
});

export default WalkThrough;
