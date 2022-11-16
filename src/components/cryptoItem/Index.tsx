import {FC, useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import decreaseArrow from '../../assets/decreaseArrow.png';
import IncrementArrow from '../../assets/increaseArrow.png';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {remove} from '../../store/reducer/RootReducer';

import { useNavigation } from '@react-navigation/native';

import {
  NamesContainer,
  Container,
  Name,
  Symbol,
  Separator,
  Logo,
  ImageValue,
  Value,
  Percent,
  ValueContainer,
  LogoContainer,
  ArrowContainer,
} from './style';

import {Crypto, ProfileScreenNavigationProp, RootStackParamList, RootStackScreenProps} from '../../interfaces/Index';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';

const numberFormatter = Intl.NumberFormat('en-US');

interface Props {
  crypto: Crypto;
}

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.25;


const CryptoItem: FC<Props> = ({crypto}) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<ProfileScreenNavigationProp<'CryptoList'>>();
  

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(86);
  const opacity = useSharedValue(1);

  const removeCrypto = () => dispatch(remove(crypto.id))

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (!(translateX.value < TRANSLATE_X_THRESHOLD))
        return (translateX.value = withTiming(0));
      

      translateX.value = withTiming(-SCREEN_WIDTH);
      itemHeight.value = withTiming(0);
      opacity.value = withTiming(0, undefined, isFinished => {
        if(isFinished) runOnJS(removeCrypto)()
      })
      
      
    },
  });


  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity};
  });

  const rItemContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={rItemContainerStyle}>
      <Animated.View style={[style.iconContainer, rIconContainerStyle]}>
        <Icons
          name="delete-sweep"
          size={40}
          color="red"
          style={{alignSelf: 'center'}}
        />
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={rStyle}>
          <Container onPress={() => navigate('CryptoDetail', { id: crypto.id} )}>
            <LogoContainer>
              <Logo
                source={{
                  uri: `https://messari.io/asset-images/${crypto.id}/128.png`,
                }}
              />
              <NamesContainer>
                <Name>{crypto.name}</Name>
                <Symbol>{crypto.symbol}</Symbol>
              </NamesContainer>
            </LogoContainer>

            <ValueContainer>
              <Value>
                $
                {numberFormatter.format(
                  crypto.market_data?.price_usd?.toFixed(2),
                )}
              </Value>
              <ArrowContainer>
                <ImageValue
                  source={
                    crypto.market_data?.percent_change_usd_last_24_hours < 0
                      ? decreaseArrow
                      : IncrementArrow
                  }
                />
                <Percent
                  percent={
                    crypto.market_data?.percent_change_usd_last_24_hours < 0
                  }>
                  {Math.abs(
                    crypto.market_data?.percent_change_usd_last_24_hours,
                  ).toFixed(2)}
                  %
                </Percent>
              </ArrowContainer>
            </ValueContainer>
          </Container>
        </Animated.View>
      </PanGestureHandler>
      <Separator />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    height: '100%',
    width: 80,
    position: 'absolute',
    right: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CryptoItem;
