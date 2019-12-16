import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public data
  public input = ''
  public selected = null;
  public place :string = ''
  public idSelected : number;
  public isAddData :boolean = false
  public imageLink = ''

  constructor(private dataService  : DataServiceService,) { }

  ngOnInit() {
    this.data = this.dataService.data

  }

  onDataSelected(id : number){
   console.log(id)
   let selectedData = this.data.filter( ele => {
     return ele.id === id
   })
   this.idSelected = id
   this.selected = selectedData[0]
   this.input = ''
   this.place = this.selected.country

  }
  reset(){
    console.log(this.place)
    this.place = '';
    this.selected = null
  }

  addData(){
    this.reset()
    this.isAddData = true
    
  }
  cancelAddData(){
    this.isAddData = false

  }
  imgLink(param){
    console.log(param.value);
    this.imageLink = param.value
    
  }
  submit(link,title,desc){
    let obj = {
      "country" : title,
      "data" : desc,
      "link" : link,
      "id" : this.data.length + 1

    }
    this.data.push(obj)
    this.dataService.setdata(this.data)

    this.isAddData = false
    window.confirm('data Added')
    console.log(this.data)
    this.imageLink = ''
  }

}
