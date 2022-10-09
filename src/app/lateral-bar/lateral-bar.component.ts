import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css'],
})
export class LateralBarComponent implements OnInit {
  categories: Array<string> = ['/category1', '/category2', '/category3'];

  constructor() {}

  ngOnInit(): void {}
}
