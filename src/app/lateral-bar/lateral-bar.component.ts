import { Component, OnInit } from '@angular/core';
import { CatServicesService } from '../services/cat-services.service';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css'],
})
export class LateralBarComponent implements OnInit {
  categories: Array<object> = [];

  constructor(private catServices: CatServicesService) {}

  ngOnInit(): void {
    this.catServices.getCatCategories().subscribe((data: Array<object>) => {
      this.categories = data;
    });
  }
}
