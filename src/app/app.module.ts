import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { CatListComponent } from './cat-list/cat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
