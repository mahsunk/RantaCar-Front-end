import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44325/api/CarImages/";

  getAllByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    const newPath = this.apiUrl + "GetAllByCarId?carId=" + carId;
   return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
