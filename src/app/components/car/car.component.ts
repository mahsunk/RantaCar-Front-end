import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 

import { CarDto } from 'src/app/models/Dtos/carDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDto[] = [];
 
  dataLoaded = false;
  carFilterText = "";
  constructor(private carService: CarService, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activetedRoute.params.subscribe(params => {



//       if (params["brandId"]) {
//       //  this.getCarsByBrandId(params["brandId"])
//         console.log("Brand")
//       }
//       else if (params["colorId"]) {
// console.log("renk")
//         //this.getCarsByColorIdDto(params["colorId"]);
//       }
       if (params["brandId"]&& params["colorId"]) {
        this.getCarByFilter(Number(params["brandId"]),Number(params["colorId"]))
      }
      else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColorIdDto(params["colorId"])
      }
      else {
        this.getcars();
      }

    })
     
  }

  getCarByFilter(brandId:number, colorId: number) {
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response => {
      this.cars = response.data,
      this.dataLoaded = true
      // if(this.cars.length == 0){
      //   this.toastr.info('Arama sonuçunuza ait bir araç bulunmamaktadır.', 'Arama Sonucu');
      // }
    })
    
  }
 

  getcars() {
    this.carService.getcars().subscribe(response => {
      this.cars = response.data;

      this.dataLoaded = true;
    })
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByColorIdDto(colorId: number) {
    this.carService.getCarsByColorIdDto(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

 


}
