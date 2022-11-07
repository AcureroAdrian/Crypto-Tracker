import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  display: flex;
`;

export const CryptoInput = styled.TextInput`
  border: 2px solid ${theme.colors.gray};
  width: 90%;
  height: 60px;
  position: relative;
  top: 29%;
  margin: 5%;
  border-radius: 6px;
  padding-left: 10px;
  font-size: 17px;
`;

export const AddText = styled.Text`
  font-size: 26px;
  color: ${theme.colors.darkGray};
  position: relative;
  top: 28.5%;
  left: 6%;
  line-height: 30px;
  font-weight: 700;
  font-family: Inter;
  letter-spacing: 0px;
`;

export const BackText = styled.Text`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: ${theme.colors.blueGray};
  padding-left: 16px;
  margin-top: 14px
  font-family: Inter;
`;

export const OpenModalText = styled.Text`
  margin-top: 50px;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.white};
  text-align: center;
  font-family: Inter;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.gray};
  background-color: ${theme.colors.yellow};
  text-align: center;
  text-align-vertical: center;
  width: 160px;
  height: 48px;
  border-radius: 6px;
`;

export const Touchable = styled.TouchableOpacity`
  width: 155px;
  height: 48px;
  left: 54%;
  top: 28%;
`;

