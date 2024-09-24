import {Dish} from "./dish.entity";

export class Dupe {
  id: number;
  table: number;
  dishes: Dish[];

  constructor(dupe: { id?: number; table?: number; dishes?: Dish[] }) {
    this.id = dupe.id || 0;
    this.table = dupe.table || 0;
    this.dishes = dupe.dishes ? dupe.dishes.map(d => new Dish(d)) : [];
  }
}
