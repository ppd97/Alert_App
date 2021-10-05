import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  public subject=new BehaviorSubject<any>(null);
  public datasubcription = this.subject.asObservable();
  constructor(private http:HttpClient) { }
  sendMessage(msg:string)
  {
    this.subject.next(msg);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
}
}
