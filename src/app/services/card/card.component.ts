import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cat } from 'src/app/cat';
import { CatDialogComponent } from 'src/app/cat-dialog/cat-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(CatDialogComponent, { data: this.cat });
  }
}
