import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCategorieComponent } from './cat-categorie.component';

describe('CatCategorieComponent', () => {
  let component: CatCategorieComponent;
  let fixture: ComponentFixture<CatCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
