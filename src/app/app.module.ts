import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { NasabahListComponent } from './content/nasabah/nasabah-list/nasabah-list.component';
import {NasabahService} from './content/nasabah/nasabah.service';
import {NasabahItemComponent} from './content/nasabah/nasabah.item.component';
import { NasabahTambahComponent } from './content/nasabah/nasabah-tambah/nasabah-tambah.component';
import { NasabahEditComponent } from './content/nasabah/nasabah-edit/nasabah-edit.component';

import {RouterModule, Routes} from '@angular/router';

const routerLink: Routes = [
  {path: "nasabah", component: NasabahListComponent, children: [
    {path: "edit/:id", component: NasabahEditComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NasabahListComponent,
    NasabahItemComponent,
    NasabahTambahComponent,
    NasabahEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerLink)
  ],
  providers: [NasabahService],
  bootstrap: [AppComponent]
})
export class AppModule { }
