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

import React, {FC} from 'react';
import decreaseArrow from '../../assets/decreaseArrow.png';
import IncrementArrow from '../../assets/increaseArrow.png';
import { TouchableOpacity } from 'react-native';

import {Crypto} from '../../interfaces/Index';

interface Props {
  crypto: Crypto;
}

const numberFormatter = Intl.NumberFormat('en-US');

const CryptoItem: FC<Props> = ({crypto}) => {

  return (
  <>
    <Container>
      <LogoContainer>
        <Logo source={{uri: `https://messari.io/asset-images/${crypto.id}/128.png`}} />
        <NamesContainer>
          <Name>{crypto.name}</Name>
          <Symbol>{crypto.symbol}</Symbol>
        </NamesContainer>
      </LogoContainer>

      <ValueContainer>
        <Value>
          ${numberFormatter.format(crypto.market_data?.price_usd?.toFixed(2))}
        </Value>
        <ArrowContainer>
          <ImageValue
            source={
              crypto.market_data?.percent_change_usd_last_24_hours < 0
                ? decreaseArrow
                : IncrementArrow
            }
          />
          <Percent percent={crypto.market_data?.percent_change_usd_last_24_hours < 0}>
            {Math.abs(crypto.market_data?.percent_change_usd_last_24_hours).toFixed(2)}
            %
          </Percent>
        </ArrowContainer>
      </ValueContainer>
    </Container>
    <Separator />
  </>
)};

export default CryptoItem;
