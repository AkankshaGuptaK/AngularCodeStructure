import { Injectable } from '@angular/core';
import { UiService } from '../ui/ui.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _ui:UiService
  ) { }

  whichError(errorCode:number,errorMessage:string){
    switch(errorCode){
      case SuccessCodes.HTTP_200_OK:
        this._ui.openErrorSnackBar("Evrything went good")
    }
  }

  userNotification(errorCode:number,errorMessage:string){
    switch(errorCode){
      case SuccessCodes.HTTP_200_OK:
        this._ui.openErrorSnackBar("Evrything went good")
    }
  }
}

export enum SuccessCodes{
  HTTP_200_OK=200
}
