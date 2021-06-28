import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  openErrorSnackBar(errorMessage:string){
    console.log(errorMessage);
  }
}
