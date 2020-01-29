import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public _httpClient: HttpClient) { }

  public BASE_URL = window["baseURL"]+"/api/v1";
  public EMPLOYEE_DATA_URL = `${this.BASE_URL}/api/v1/employees`;


  getEmployees() {
    return this._httpClient.get(this.EMPLOYEE_DATA_URL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
}
