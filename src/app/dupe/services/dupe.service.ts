import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service.service";
import {Dupe} from "../model/dupe.entity";


@Injectable({ providedIn: 'root' })
export class DupeService extends BaseService<Dupe> {

  constructor() {
    super();
    this.resourceEndpoint = '/dupes';
  }
}

