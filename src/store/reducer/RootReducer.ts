import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Crypto} from 'interfaces/Index';
import { Alert } from 'react-native';

const initialState = {
  cryptos: [] as Crypto[],
  loading: false,
};


export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',
  async (name: string) => {
    try {
      const {data, status} = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name}/metrics?fields=${process.env.FIELDS}`,
      ).then(res => res.json());

      if(status.error_code === 404) 
        throw Alert.alert('Not found', 'The cryptocurrent dont exist')
      else if (status.error_code === 429)
        throw Alert.alert('Error', 'The limit of requests to the server has been reached')

      return data;
    } catch (error: any) {
      console.log(error.message)
    }
  },
);

export const updateCrypto = createAsyncThunk(
  'crypto/updateCrypto',
  async (slugs: string[]) => {
    const value: Crypto[] = [];

      

      for (let i = 0; i < slugs.length; i++) {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}${slugs[i]}/metrics?fields=${process.env.FIELDS}`,
        ).then(res => res.json())

        if (response.status.error_code) throw 'Limit'

        value.push(response.data);
      }

    

    return value;
  },
);


const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCrypto.pending, state => {
        state.loading = true;
      })
      .addCase(getCrypto.fulfilled, (state, action) => {
        state.cryptos.push(action.payload);
        state.loading = false;
      })
      .addCase(getCrypto.rejected, state => {
        state.loading = false;
      })
      builder
      .addCase(updateCrypto.fulfilled, (state, action) => {
        state.cryptos = action.payload as Crypto[];
      })
      .addCase(updateCrypto.rejected, (state, action) => {
        state.loading = false
      });
  },
});

export default cryptoSlice.reducer;
