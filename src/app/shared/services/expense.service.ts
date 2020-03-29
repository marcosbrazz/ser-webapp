import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    const json = '[{"email":"cio_3@ibm.com","vendor":"vale night","vendor_type":"casa rosa","date":"2020-03-16 20:37:11.846307","price":0.01,"user_outlier":false,"usergroup_outlier":false}, \
    {"email":"cio_3@ibm.com","vendor":"Uber","vendor_type":"Transport","date":"2020-03-16 20:37:11.846307","price":1.23,"user_outlier":false,"usergroup_outlier":false}]';
    return JSON.parse(json);
    // return this.httpClient.get<any>(`${environment.apiUrl}/api/expense`);
  }
}
