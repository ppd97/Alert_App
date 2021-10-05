import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpClient) { }
  url='https://api.weather.gov/alerts/active/count';
  getAreas()
  {
    return this.http.get(this.url);
  }
}
