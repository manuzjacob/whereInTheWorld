import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../Models/countrydetails';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country | undefined;
  constructor() {}

  ngOnInit(): void {}
}
