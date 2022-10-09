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
  breedListSelect: string = 'beng';

  constructor(private catServices: CatServicesService) {}

  ngOnInit(): void {
    this.catServices.getBreeds().subscribe((data: Array<object>) => {
      this.breedList = data;
    });
    this.catServices
      .getCatList(this.breedListSelect)
      .subscribe((data: Array<object>) => {
        this.catList = data;
      });
  }

  onChangeCatList() {
    this.catServices
      .getCatList(this.breedListSelect)
      .subscribe((data: Array<object>) => {
        this.catList = data;
      });
  }
}
