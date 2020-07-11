import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { FareListComponent } from './fare/fare-list/fare-list.component';
import { FareAddComponent } from './fare/fare-add/fare-add.component';
import { FareEditComponent } from './fare/fare-edit/fare-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DailyComponent } from './report/daily/daily.component';
import { RecapComponent } from './report/recap/recap.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    VehicleListComponent,
    FareListComponent,
    FareAddComponent,
    FareEditComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    DailyComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
