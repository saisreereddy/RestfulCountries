import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RegionService } from '../region-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Currency , Language} from './currency';

@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css'],
    providers: [Location]
})
export class CountryviewComponent implements OnInit {
selectedRegion: any;
selectedCurrencies: any;
allData: any;
finalData: any[] = [];
code: any;
  constructor(private _route: ActivatedRoute, private router: Router, private regionService: RegionService, private location: Location) { }

  ngOnInit() {
    let myRegion = this._route.snapshot.paramMap.get('regionid');
    let myCurrencyName = this._route.snapshot.paramMap.get('currencyName');
    let myLanguageName = this._route.snapshot.paramMap.get('languageName');
console.log(myRegion);
console.log(myCurrencyName);
console.log(myLanguageName);
if (myRegion) {
    this.regionService.getAllCountriesOfSelectedRegion(myRegion).subscribe(
              data => {

              //  this.allRegions = data;
              this.selectedRegion = data;
              console.log(this.selectedRegion);
              this.selectedCurrencies = data.map(a => a.currencies);
              console.log(this.selectedCurrencies);
              } ,
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );
          }

if (myCurrencyName) {
                this.regionService.getAllCountriesOfSelectedCurrencyName().subscribe(
                          data => {
                          this.allData = data;
                          console.log(this.allData);
                          for (let item of this.allData) {
                            let currency: Currency;
for (currency of item.currencies) {
  if (currency.name === myCurrencyName ) {
    this.finalData.push(item);
  }
}

                          }
                          console.log(this.finalData.length);
                       // this.selectedCurrencies = data.map(a => a.currencies);
                        // console.log(this.selectedCurrencies);
                          } ,
                          error => {
                            console.log("some error occured");
                            console.log(error.errorMessage);
                          }
                        );


                      }
                      if (myLanguageName) {
                        this.regionService.getAllCountriesOfSelectedCurrencyName().subscribe(
                                  data => {
                                  this.allData = data;
                                  console.log(this.allData);
                                  for (let item of this.allData) {
                                    let language: Language;
        for (language of item.languages) {
          if (language.name === myLanguageName ) {
            this.finalData.push(item);
          }
        }
                                  }
                                  console.log(this.finalData.length);
                               // this.selectedCurrencies = data.map(a => a.currencies);
                                // console.log(this.selectedCurrencies);
                                  } ,
                                  error => {
                                    console.log("some error occured");
                                    console.log(error.errorMessage);
                                  }
                                );
                              }
  }

  goBackToPreviousPage(): any {
    this.location.back();
  }
}
