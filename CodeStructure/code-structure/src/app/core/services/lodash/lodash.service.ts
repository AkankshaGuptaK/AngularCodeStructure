import { Injectable } from '@angular/core';
import { forEach } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LodashService {

  constructor() { }

  get forEach(){
    return forEach;
  }
}
