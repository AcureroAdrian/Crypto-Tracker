import {Modal, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import {CryptoInput, AddText, BackText, ModalText, Touchable} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import theme from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {getCrypto} from '../../store/reducer/RootReducer';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [borderColor, setBorderColor] = useState(theme.colors.borderGray);
  const {navigate} = useNavigation();

  const cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );
  const dispatch = useDispatch<AppDispatch>();

  const findDuplicate = () => {
    const res = cryptos.find(e => {
      return (
        e.name.toLowerCase() === text.toLowerCase() ||
        e.symbol.toLowerCase() === text.toLowerCase()
      );
    });
    return res;
  };

  const handleCrypto = () => {
    try {
      if (!text) {
        Alert.alert('Warning', 'Crypto is required');
      } else if (findDuplicate()) {
        Alert.alert('Error', 'Crypto already displayed');
      } else {
        dispatch(getCrypto(text));
        onChangeText('');
        navigate('CryptoList');
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <Modal animationType="fade">
      <TouchableOpacity onPress={() => navigate('CryptoList' as never)}>
        <BackText>&lt; Back to list</BackText>
      </TouchableOpacity>
      <AddText>Add a Cryptocurrency</AddText>
      <CryptoInput
        onBlur={() => setBorderColor(theme.colors.borderGray)}
        onFocus={() => setBorderColor(theme.colors.yellow)}
        style={{borderColor}}
        onChangeText={onChangeText}
        placeholder="Use a name or ticker symbol..."
      />
      <Touchable onPress={handleCrypto}>
        <ModalText
          style={{
            color:
              text === '' ? theme.colors.borderGray : theme.colors.blueGray,
          }}>
          Add
        </ModalText>
      </Touchable>
    </Modal>
  );
};

export default AddCrypto;
