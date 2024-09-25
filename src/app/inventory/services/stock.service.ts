import { Injectable } from '@angular/core';
import {Stock} from "../model/stock.entity";
import {BaseService} from  "../../shared/services/base.service.service";
@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService<Stock> {

  constructor() {
    super();
    this.resourceEndpoint = '/stock';
  }
}
