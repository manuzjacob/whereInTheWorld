import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../Models/countrydetails';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesApi = 'https://restcountries.com/v2'

  

  constructor(private httpClient:HttpClient) { }

  getCountriesList(){
    return this.httpClient.get<Country[]>(`${this.countriesApi}/all`, { responseType: 'json' })
    
  }
  getCountryDetails(CountryName:string){
    return this.httpClient.get<Country[]>(`${this.countriesApi}/name/${CountryName}`)
    .pipe(map(([res]:any)=> res))
  }

  getCountryCodes(codes: string[]){
    return this.httpClient.get<Country[]>(`${this.countriesApi}/alpha?codes=${codes}`)

  }

  filterCountry(Continent:string){
    return this.httpClient.get<Country[]>(`${this.countriesApi}/continent/${Continent}`)
  }

}
