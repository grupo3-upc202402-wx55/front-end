export class Order {
  id : number;
  table: string;
  client : string;
  time : Date;
  status : string;


  constructor(stock: { id?: number, table?: string ,  client?: string, time?: Date, status?: string}) {
    this.id = stock.id || 0;
    this.table = stock.table || '';
    this.client = stock.client || '';
    this.time = stock.time || new Date();
    this.status = stock.status || '';

  }
}
