import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http :HttpClient) { }
  getAll(){
    return this.http.get(this.url)
  }
}