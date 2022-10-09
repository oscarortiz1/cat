import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatServicesService {
  baseURL: string = 'https://api.thecatapi.com/v1';
  key = 'live_w5m563XBhmdfD3l8lPDDIyB0ZJqYhfBu6NnlpVuOdqivDB0UdN9lXsLtWH3SQP4o';
  private categoryId = new BehaviorSubject<any>('');
  count: any = 0;
  categoryId$ = this.categoryId.asObservable();

  constructor(private http: HttpClient) {}

  getBreeds() {
    return this.http.get(`${this.baseURL}/breeds`);
  }

  getCategoryId(id: any) {
    this.categoryId.next(id);
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

  getCatCategories() {
    return this.http.get(`${this.baseURL}/categories`, {
      headers: {
        'x-api-key': this.key,
      },
    });
  }

  getCatListCategory(id: any) {
    return this.http.get(this.baseURL + '/images/search', {
      headers: {
        'x-api-key': this.key,
      },
      params: {
        limit: '15',
        category_ids: id,
      },
    });
  }
}
