import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { AlertType } from '../core/models/alert-type.model';

@Injectable({ providedIn: 'root' })
export class WeatherServices {

    constructor(
        private http: HttpClient) {
    }

    getAlertTypes(): Observable<AlertType[]> {
        const url = `${environment.api_weather_endpoint}/alerts/types`;

        return this.http.get<any>(url)
            .pipe(map(data => {
                return data.eventTypes.map((x: any) => {
                    return new AlertType({ name: x });
                });
            }));
    }
}