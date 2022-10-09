import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './services/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CatDialogComponent } from './cat-dialog/cat-dialog.component';
import { CatCategorieComponent } from './cat-categorie/cat-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarComponent,
    CatListComponent,
    CardComponent,
    CatDialogComponent,
    CatCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
