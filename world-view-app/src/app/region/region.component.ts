import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RegionService } from '../region-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { SelectDropdown } from './selectdropdown';
import { trigger, style, animate, transition } from '@angular/animations';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class RegionComponent implements OnInit , SelectDropdown {
allRegions: any;
allData: any;
someProperty: any;
  constructor(private _route: ActivatedRoute, private router: Router, private regionService: RegionService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }
  this.spinnerService.show();
    this.regionService.getAllRegions().subscribe(
              data => {
                this.spinnerService.hide();
              //  this.allRegions = data;
              this.allData = data;
                let result = data.map(a => a.region);
                let unique = result.filter( onlyUnique );
                console.log(unique);
                this.allRegions = unique;
              } ,
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );


  }

  onSelect(val) {
    console.log(val);
    this.someProperty = val;
   // if (this.someProperty === 'books') {
    //  this.toastr.success('Redirecting to books', 'Success!');
 //   this.allData = this.allData.filter(x => x.value === val);
  //  console.log(this.allData);
 this.router.navigate(['/countryview', { currencyName : val }]).then(() => {
  // do whatever you need after navigation succeeds
});


     // }
        }
        onSelectLanguage(val) {
          console.log(val);
          this.someProperty = val;
         // if (this.someProperty === 'books') {
          //  this.toastr.success('Redirecting to books', 'Success!');
       //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
       this.router.navigate(['/countryview', { languageName : val }]).then(() => {
        // do whatever you need after navigation succeeds
      });
           // }
              }
              onSelectRegion(val) {
                console.log(val);
                this.someProperty = val;
               // if (this.someProperty === 'books') {
                //  this.toastr.success('Redirecting to books', 'Success!');
             //   this.allData = this.allData.filter(x => x.value === val);
              //  console.log(this.allData);
             this.router.navigate(['/countryview', { regionid : val }]).then(() => {
              // do whatever you need after navigation succeeds
            });
                 // }
                    }
}
