export class Checkout {
  success: boolean;
  message: string;
  data: {
    plat_number: string;
    vehicle: string;
    checked_in: Date;
    checked_out: Date;
    amount: number;
  }
}
