import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatServicesService {
  baseURL: string = 'https://api.thecatapi.com/v1';
  key = 'live_w5m563XBhmdfD3l8lPDDIyB0ZJqYhfBu6NnlpVuOdqivDB0UdN9lXsLtWH3SQP4o';

  constructor(private http: HttpClient) {}

  getBreeds() {
    return this.http.get(`${this.baseURL}/breeds`);
  }

  getCatList(breedListSelect, page) {
    return this.http.get(this.baseURL + '/images/search', {
      headers: {
        'x-api-key': this.key,
      },
      params: {
        page: page,
        limit: '15',
        breed_ids: breedListSelect,
      },
    });
  }
}
