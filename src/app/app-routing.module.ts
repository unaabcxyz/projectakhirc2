import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { TambahDataDivisiComponent } from './tambah-data-divisi/tambah-data-divisi.component';
import { EditDataDivisiComponent } from './edit-data-divisi/edit-data-divisi.component';
import { HapusDataDivisiComponent } from './hapus-data-divisi/hapus-data-divisi.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambah-data-divisi", component: TambahDataDivisiComponent},
  {path:"edit-data-divisi", component: EditDataDivisiComponent},
  {path:"hapus-data-divisi", component: HapusDataDivisiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
