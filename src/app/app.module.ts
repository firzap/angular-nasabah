import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { NasabahListComponent } from './content/nasabah/nasabah-list/nasabah-list.component';
import {NasabahService} from './content/nasabah/nasabah.service';
import {NasabahItemComponent} from './content/nasabah/nasabah.item.component';


@NgModule({
  declarations: [
    AppComponent,
    NasabahListComponent,
    NasabahItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NasabahService],
  bootstrap: [AppComponent]
})
export class AppModule { }
