import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../../../configs/app-constants.config';


@Injectable()
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get(APP_CONSTANTS.quotes.stormconsultancy.co.uk/random.json);
  }
}