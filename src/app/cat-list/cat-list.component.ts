import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatServicesService } from '../services/cat-services.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  catList = [];
  breedList = [];
  origin = [];
  breedListSelect: string = '';
  page: number = 0;
  loading: boolean = false;

  constructor(private catServices: CatServicesService) {}

  ngOnInit(): void {
    this.loading = true;
    try {
      this.catServices.getBreeds().subscribe((data: Array<object>) => {
        this.breedList = data;
      });
      this.catServices
        .getCatList(this.breedListSelect, this.page)
        .subscribe((data: Array<object>) => {
          this.catList = data;
          this.loading = false;
        });
    } catch (error) {
      console.log(error);
    }
  }

  addMoreCats() {
    this.page++;
    this.loading = true;
    try {
      this.catServices
        .getCatList(this.breedListSelect, this.page)
        .subscribe((data: Array<object>) => {
          this.catList = [...this.catList, ...data];
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  onChangeCatList() {
    this.loading = true;
    try {
      this.catServices
        .getCatList(this.breedListSelect, this.page)
        .subscribe((data: Array<object>) => {
          this.catList = data;
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
