import { Injectable } from '@angular/core';
//import { AES, enc} from 'crypto-js';
import { publicDecrypt, publicEncrypt} from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class UtilService {


  constructor() { }

  encrypt(data){
    //15:01
    return data;//encrypted data
  }

  decrypt(data){
    return data;//decrypted data
  }

  //any method to be created
}
