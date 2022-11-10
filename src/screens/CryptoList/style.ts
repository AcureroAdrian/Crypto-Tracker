import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.SafeAreaView`
  background-color: ${theme.colors.white};
  height: 100%;
`;

export const ContainerFlatList = styled.View`
  background-color: ${theme.colors.white};
  height: auto;
  max-height: 90%;
`;

export const BlueText = styled.Text`
  padding:50px;
  font-size: 18px;
  line-height: 24px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.blueGray};
  text-align: center;
  font-family: Inter;
`;

export const OpenModalText = styled.Text`
  margin-top: 49px;
  font-size: 19px;
  line-height: 24px;
  color: ${theme.colors.blueGray};
  text-align: center;
  font-family: Inter;
`;

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  align-self: center;
`;

export const NamesContainer = styled.View`
  width: 25%;
  position: relative;
  left: 18%;
  bottom: 14%;
`;

export const Name = styled.Text`
  color: ${theme.colors.black};
  font-size: 16px;
`;

export const Symbol = styled.Text`
  color: ${theme.colors.gray};
  font-size: 14px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: relative;
  left: 5px;
  top: 30px;
`;

export const Value = styled.Text`
  position: relative;
  font-size: 16px;
  color: ${theme.colors.gray};
  text-align: right;
  bottom: 55%;
`;

export const Increase = styled.Text`
  position: relative;
  font-size: 14px;
  color: ${theme.colors.green};
  left: 65%;
  bottom: 55%;
`;

export const Decrease = styled.Text`
  position: relative;
  font-size: 14px;
  color: ${theme.colors.red};
  left: 65%;
  bottom: 55%;
`;

export const ArrowContainer = styled.View`
  position: absolute;
  right: 7%;
  top: 60%;
`;
