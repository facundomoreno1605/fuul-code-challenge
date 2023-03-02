export const enum Assets {
  ETH = 'ETH',
  BTC = 'BTC'
}

export interface PriceInterface {
  asset: Assets;
  quantity: number;
}
