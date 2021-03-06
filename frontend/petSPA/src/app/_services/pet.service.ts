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

  addPet(pet) {
    var body =  JSON.stringify(pet);
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post('http://localhost:3000/addPet', body, httpOptions);
  }

  deletePet(id) {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let url = "http://localhost:3000/deletePet/" + id;
    return this.http.delete(url, httpOptions);
  }

  editPet(pet) {
    var body = JSON.stringify(pet);
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let url = "http://localhost:3000/updatePet";
    return this.http.post(url, body, httpOptions);
  }
}
