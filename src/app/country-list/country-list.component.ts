import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Country } from '../Models/countrydetails';
import { CountryService } from '../services/country.service';

const CONTINENTS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries$: Observable<Country[]> | undefined;
  countries: Country[] = [];
  searchField!: FormControl;

  constructor(private countryService: CountryService) {
    this.searchField = new FormControl('');
  }

  ngOnInit(): void {
    const country$ = this.countryService.getCountriesList();

    const searchItem$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    this.countries$ = combineLatest([country$, searchItem$]).pipe(
      map(([country, searchItem]) =>
        country.filter(
          (country) =>
            searchItem === '' ||
            country.name.toLowerCase().startsWith(searchItem.toLowerCase())
        )
      )
    );
  }
}
