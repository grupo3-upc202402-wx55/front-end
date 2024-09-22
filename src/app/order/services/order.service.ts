import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service.service";
import {Order} from "../model/order.entity";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor() {
    super();
    this.resourceEndpoint = '/order';
  }
}
