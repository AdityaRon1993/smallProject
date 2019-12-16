import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  public id;
  public dataToShow = null

  constructor( public dataService : DataServiceService,
               public route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.id = +(params.id);
      let data = this.dataService.data.filter( ele => {
        return ele.id === this.id
      })
      console.log(data)
      this.dataToShow = data[0]
    })
  }

}
