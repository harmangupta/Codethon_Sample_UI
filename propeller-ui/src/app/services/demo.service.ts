import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public _httpClient: HttpClient) { }



  //This addr is including port
  public BASE_URL = "http://" + window.location.host;
  public EMPLOYEE_DATA_URL = `${this.BASE_URL}/api/v1/employees`;


  getEmployees() {
    return this._httpClient.get(this.EMPLOYEE_DATA_URL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
}
