import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarDto } from 'src/app/models/Dtos/carDto';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars: CarDto[] = [];
  cardetails: CarImage[] = [];
  constructor(private CarimageService: CarimageService, private activetedRoute: ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getAllByCarId(params["carId"]);
        this.getCarsByCarIdDto(params["carId"]);
      }
    })
  }


  getAllByCarId(carId: number) {
    this.CarimageService.getAllByCarId(carId).subscribe(response => {
      this.cardetails = response.data;
    })
  }

  getCarsByCarIdDto(carId:number){
this.carService.getCarsByCarIdDto(carId).subscribe(response=>{
  this.cars=response.data;
  console.log(response)
})
  }

  getSliderClassName(index: Number) {
    if (index == 0) {

      return "carousel-item active";
    } else {
      return "carousel-item";


    }
  }
}
