import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cat: Cat = {
    name: '',
    description: '',
    image: '',
    url: '',
    breeds: [{}],
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.cat);
  }
}