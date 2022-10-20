import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from 'src/app/models/Dtos/carDto';
 
@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], carFilterText:string):CarDto[] {
    carFilterText=carFilterText?carFilterText.toLocaleLowerCase():"";

    return carFilterText?value.filter((c:CarDto)=>c.carName.toLocaleLowerCase().indexOf(carFilterText)!==-1):value;
  }

}
