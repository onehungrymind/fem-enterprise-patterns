import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private endpoint = 'http://openlibrary.org';

  constructor(private http: HttpClient) {
  }

  search(term) {
    return this.http.get(`${this.endpoint}/search.json`, {params: {q: term}});
  }
}
