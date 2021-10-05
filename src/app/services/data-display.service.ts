import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../data-display/data-display.component';

@Injectable({
  providedIn: 'root'
})
export class DataDisplayService {

  url:string='https://api.weather.gov/alerts/active/area/';
  urlLink!:string;
  constructor(private http:HttpClient) { }
  getData(pass: string)
  {
    this.urlLink=this.url+pass
    return this.http.get(this.urlLink);
  }
}
