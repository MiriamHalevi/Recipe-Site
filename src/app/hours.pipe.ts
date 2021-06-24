import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(value:number): string {
    let result;
    if(value<60)
    {
      result="דקות"+value
    return result;
    }
    else{
       result=Math.floor(value/60) +"דקות"+(value-(Math.floor(value/60)*60))+"שעות";
    return result;
    }
    
  }

}
