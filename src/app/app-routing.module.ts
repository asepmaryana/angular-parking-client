import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { FareListComponent } from './fare/fare-list/fare-list.component';
import { FareAddComponent } from './fare/fare-add/fare-add.component';
import { FareEditComponent } from './fare/fare-edit/fare-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DailyComponent } from './report/daily/daily.component';
import { RecapComponent } from './report/recap/recap.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Dashboard' },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'vehicle',
    component: VehicleListComponent,
    data: { title: 'Kendaraan' }
  },
  {
    path: 'fare',
    component: FareListComponent,
    data: { title: 'Daftar Tarif' }
  },
  {
    path: 'fare/add',
    component: FareAddComponent,
    data: { title: 'Tambah Tarif' }
  },
  {
    path: 'fare/edit/:id',
    component: FareEditComponent,
    data: { title: 'Edit Tarif' }
  },
  {
    path: 'user',
    component: UserListComponent,
    data: { title: 'Daftar Pengguna' }
  },
  {
    path: 'user/add',
    component: UserAddComponent,
    data: { title: 'Tambah Pengguna' }
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    data: { title: 'Edit Pengguna' }
  },
  {
    path: 'daily',
    component: DailyComponent,
    data: { title: 'Laporan Trx Harian' }
  },
  {
    path: 'recap',
    component: RecapComponent,
    data: { title: 'Laporan Rekap Transaksi' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
