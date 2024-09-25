export class Stock {
  id: number;
  ingredient: string;
  quantity: string;


  constructor(stock: { id?: number, ingredient?: string ,  quantity?: string}) {
    this.id = stock.id || 0;
    this.ingredient = stock.ingredient || '';
    this.quantity = stock.quantity || '';

  }
}
