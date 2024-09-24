export class Dish {
  name: string;
  cost: number;

  constructor(dish: { name?: string; cost?: number }) {
    this.name = dish.name || '';
    this.cost = dish.cost || 0;
  }
}
