import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  getDog() {
    return this.http.get(`https://random.dog/woof.json`);
  }

  getCat() {
    return this.http.get(`https://cataas.com/cat`, {responseType: 'blob'});
  }
}
