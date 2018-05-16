import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class RegionService {
  private baseUrl = 'https://restcountries.eu/rest/v2';
  constructor(private _http: HttpClient) {
    console.log("RegionService is called")
      }
      private handleError(err: HttpErrorResponse) {
        console.log("Handle error Http calls")
        console.log(err.message);
        return Observable.throw(err.message);
      }
      getAllRegions(): any {
        let myResponse = this._http.get(this.baseUrl + '/all');
        return myResponse;

      }
      getAllCountriesOfSelectedRegion(selectedregion): any {
        let myResponse = this._http.get(this.baseUrl + '/region' + '/' + selectedregion);
        return myResponse;

      }
      getAllCountriesOfSelectedCurrencyName(): any {
        let myResponse = this._http.get(this.baseUrl + '/all');
        return myResponse;

      }
      getSelectedCountryInformation(selectedcountry): any {
        let myResponse = this._http.get(this.baseUrl + '/alpha' + '/' + selectedcountry);
        return myResponse;

      }

}
