import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiMethod,AuthEndPoints } from '../../const';
import { ErrorService } from '../error/error.service';
import { environment} from '../../../../environments/environment';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  methods:ApiMethod;

  constructor(
    private http:HttpClient,
    private _error:ErrorService
  ) { }
  
  requestCall(api:AuthEndPoints,method:ApiMethod,data?:any){
    let response;
    switch(method){
      case ApiMethod.GET:
        response=this.http.get(`${environment.apiUrl}${api}`)
          .pipe(catchError(err=> this.handleError(err,this)));
        break;
      default:
        break;
    }
    //Create model for response
    return response;

  }

  handleError(error:HttpErrorResponse,self){
    if(error.error instanceof ErrorEvent){
      console.log(error.error.message);
    }
    else{
      this._error.whichError(error.status,error.message);
      return throwError({error:error.message,status:error.status});
    }
  }
}
