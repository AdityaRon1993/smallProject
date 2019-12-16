import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate',
  pure: false
})
export class SortDatePipe implements PipeTransform {

  transform(value: any, args: string): any {
    let filteredData
    if(args){
      filteredData = value.filter(ele=>{
        return ((ele.country).toLowerCase()).indexOf(args.toLowerCase()) > -1
      })
    }else{
      return []
    }
    
    return filteredData;
  }

}
