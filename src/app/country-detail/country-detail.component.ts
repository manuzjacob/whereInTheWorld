import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Country, Currency, Language } from '../Models/countrydetails';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country$: Observable<Country> | undefined;
  borderCountries$: Observable<Country[]> | undefined;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.countryService
        .getCountryDetails(params.country)
        .pipe(
          mergeMap((res) => {
            this.borderCountries$ = this.countryService.getCountryCodes(
              res.borders
            );
            return of(res);
          })
        );
    });
  }

  showCurrency(currencies: Currency[]) {
    return currencies.map((currency) => currency.name);
  }

  showLanguage(languages: Language[]) {
    return languages.map((language) => language.name);
  }
}
