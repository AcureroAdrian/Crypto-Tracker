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
