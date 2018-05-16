import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RegionService } from '../region-service.service';

@Component({
  selector: 'app-singlecountryview',
  templateUrl: './singlecountryview.component.html',
  styleUrls: ['./singlecountryview.component.css'],
  providers: [Location]
})
export class SinglecountryviewComponent implements OnInit {
selectedCountry: any;
  constructor(private _route: ActivatedRoute, private router: Router, private regionService: RegionService, private location: Location) { }

  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('code'));
    let myCountry = this._route.snapshot.paramMap.get('code');
console.log(myCountry);
    this.regionService.getSelectedCountryInformation(myCountry).subscribe(
              data => {

              //  this.allRegions = data;
              this.selectedCountry = [data];
              console.log(this.selectedCountry);
              } ,
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );






  }
  goBackToPreviousPage(): any {
    this.location.back();
  }

}
