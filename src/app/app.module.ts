import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortDatePipe } from './sort-date.pipe'
import { RouterModule , Routes } from '@angular/router'
import { PlacesComponent } from './places/places.component';


const routes: Routes = [
  {
    path: '',
    component : BodyComponent
  },
  {
    path: 'places/:id',
    component: PlacesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PlacesComponent,
    SortDatePipe
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
