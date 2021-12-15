import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './modules/country-detail/country-detail.component';
import { CountryListComponent } from './modules/country-list/country-list.component';

const routes: Routes = [
  {
    path:'',
    component:CountryListComponent
  },
  {
    path: ':country',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
