import { TrxRecap } from './trx-recap';

export class TrxResponse {
  bike_count: number;
  car_count: number;
  bike_total: number;
  car_total: number;
  total: number;
  rows: TrxRecap[] = [];
}
