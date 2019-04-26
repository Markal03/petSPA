import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets() {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get('http://localhost:3000/loadAllPets', httpOptions);
}
}
