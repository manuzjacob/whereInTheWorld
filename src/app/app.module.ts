import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Country } from './Models/countrydetails';
import { HttpClientModule} from'@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    NavbarComponent,
    CountryDetailComponent,
    CountryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
