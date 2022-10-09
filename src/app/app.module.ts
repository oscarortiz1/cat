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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarComponent,
    CatListComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
