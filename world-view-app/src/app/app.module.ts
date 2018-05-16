import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { RegionService } from './region-service.service';
import { CountryviewComponent } from './countryview/countryview.component';
import { SinglecountryviewComponent } from './singlecountryview/singlecountryview.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    NotFoundComponent,
    AboutComponent,
    CountryviewComponent,
    SinglecountryviewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {path: 'region', component: RegionComponent},
      {path: '', redirectTo: 'region', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'countryview', component: CountryviewComponent},
      {path: 'singlecountryview', component: SinglecountryviewComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
