import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.TouchableOpacity`
  padding: 28px 25px 10px 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${theme.colors.black};
  `;

export const Separator = styled.View`
  height: 1px;
  width: 90%;
  margin-top: 11px;
  align-self: center;
  background-color: ${theme.colors.dividerGray};
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const NamesContainer = styled.View`
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.Text`
  color: ${theme.colors.black};
  font-size: 17px;
  font-weight: 500px;
`;

export const Symbol = styled.Text`
  color: ${theme.colors.gray};
  font-size: 15px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
`;

export const ValueContainer = styled.View`
  display: flex;
`;

export const Value = styled.Text`
  font-size: 19px;
  font-weight: 500px;
  color: ${theme.colors.black};
  text-align: right;
`;
export const ArrowContainer = styled.View`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const ImageValue = styled.Image`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  padding-top: 2px;
`;

export const Percent = styled.Text`
  font-size: 16px;
  color: ${({percent}: {percent: boolean}) => (percent ? 'red' : 'green')};
`;

export const IconContainer = styled.Text`
 height: 100%;
 width: 80px;
 position: absolute;
 right: 2px;
 display: flex;
 justify-content: center;
 align-items: center;
`
