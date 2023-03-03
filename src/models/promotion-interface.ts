export const enum PromotionTypes {
  TWO_FOR_ONE = 'TWO FOR ONE',
  BULK_PURCHASE = 'BULK PURCHASE'
}

export default interface PromotionInterface {
  type: PromotionTypes;
  itemsRequired: number;
}
