import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';
import { Router } from '@angular/router';
//crypto-js
//ngx-cookie-Service

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _util:UtilService
  ) { }

  saveToke(token:string):void{
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  removeToken(){
    localStorage.removeItem("token");
  }

  setLocalObject(key:string,value:any){
    localStorage.setItem(key,this._util.encrypt(JSON.stringify(value)));
  }

  getLocalObject(key:string){
    return JSON.parse(this._util.decrypt(localStorage.getItem(key)))    
  }

  getCsrfToken(){
    //return this.cookies.get("csrftoken");
  }

}
