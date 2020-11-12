import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3100';

@Injectable()
export class ActionsService {
  constructor(private http: Http) {}

  single() {
    return this.http.get(`${BASE_URL}/action`)
      .map(res => res.json());
  }

  all() {
    return this.http.get(`${BASE_URL}/actions`)
      .map(res => res.json());
  }
}

