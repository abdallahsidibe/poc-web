import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map, catchError} from "rxjs/operators";

import { ReposModule } from 'src/app/model/repos/repos.module';

@Injectable({
  providedIn: 'root'
})
export class TelephoneServiceService {
  baseUrl: string = 'http://localhost:8080/';

  constructor(private  http: HttpClient) { }

  public getTelephones(): Observable<any>{
    return this.http.get<any>('${this.baseURL}/telephone/read');
  }
}
