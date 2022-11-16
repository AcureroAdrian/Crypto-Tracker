import type { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Crypto {
  id: string;
  img?: string;
  name: string;
  symbol: string;
  slug: string;
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
}

//Types to React Navigation
export type RootStackParamList = {
  CryptoList: undefined;
  AddCrypto: undefined;
  CryptoDetail: { id: string };
};

export type ProfileScreenNavigationProp<T extends keyof RootStackParamList>= 
NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
