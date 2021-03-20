import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { CarDto } from '../models/Dtos/carDto';
 

 
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44325/api/cars/";

  getcars(): Observable<ListResponseModel<CarDto>> {
    const newPath = this.apiUrl + "getallcardetailsdtos";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);

  }


  getCarsByBrandId(brandId:number): Observable<ListResponseModel<CarDto>>{
    const newPath = this.apiUrl + "GetCarsByBrandIdDto?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);

  }
  

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDto>>{

    const newPath = this.apiUrl + "getcarsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
 
  getCarsByColorIdDto(colorId:number):Observable<ListResponseModel<CarDto>>{

    const newPath = this.apiUrl + "GetCarsByColorIdDto?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByCarIdDto(carId:number):Observable<ListResponseModel<CarDto>>{

    const newPath = this.apiUrl + "getcarsbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
