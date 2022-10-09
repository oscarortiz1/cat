import { Component, Input, OnInit } from '@angular/core';
import { CatServicesService } from '../services/cat-services.service';

@Component({
  selector: 'app-cat-categorie',
  templateUrl: './cat-categorie.component.html',
  styleUrls: ['./cat-categorie.component.css'],
})
export class CatCategorieComponent implements OnInit {
  catList = [];
  constructor(private catServices: CatServicesService) {}
  counter: any = 0;
  ngOnInit(): void {
    this.catServices.categoryId$.subscribe((data) => {
      this.counter = data;
      this.catServices
        .getCatListCategory(this.counter)
        .subscribe((data: Array<object>) => {
          this.catList = data;
        });
    });

    this.catServices
      .getCatListCategory(this.counter)
      .subscribe((data: Array<object>) => {
        this.catList = data;
      });
  }
}
