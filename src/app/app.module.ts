import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DivisionComponent } from './division/division.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { TambahDataDivisiComponent } from './tambah-data-divisi/tambah-data-divisi.component';
import { EditDataDivisiComponent } from './edit-data-divisi/edit-data-divisi.component';
import { HapusDataDivisiComponent } from './hapus-data-divisi/hapus-data-divisi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppMenuComponent,
    AppFooterComponent,
    DivisionComponent,
    DashboardComponent,
    MenuComponent,
    TambahDataDivisiComponent,
    EditDataDivisiComponent,
    HapusDataDivisiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
