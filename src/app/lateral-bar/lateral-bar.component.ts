import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatServicesService } from '../services/cat-services.service';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css'],
})
export class LateralBarComponent implements OnInit {
  categories: Array<object> = [];

  constructor(
    private catServices: CatServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.catServices.getCatCategories().subscribe((data: Array<object>) => {
      this.categories = data;
    });
  }
  addCateroryId(id) {
    this.catServices.getCategoryId(id);
    this.router.navigateByUrl('/categories');
  }
}
