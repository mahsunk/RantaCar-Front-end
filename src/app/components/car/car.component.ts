import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { CarDto } from 'src/app/models/Dtos/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDto[] =[];
  dataLoaded=false;
  constructor(private carService: CarService,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.activetedRoute.params.subscribe(params=>{
     
    if (params["brandId"]) {
       this.getCarsByBrandId(params["brandId"])
     }
     else if (params["colorId"]) {
       
      this.getCarsByColorIdDto(params["colorId"]);
     }
     else{
       this.getcars();
     }
   })
 
  }

  getcars(){
    this.carService.getcars().subscribe(response=>{
      this.cars=response.data;
       console.log(response);
      this.dataLoaded=true;
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColorIdDto(colorId:number)
  {
    this.carService.getCarsByColorIdDto(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  
}
