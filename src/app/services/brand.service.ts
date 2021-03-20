import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'https://localhost:44325/api/brands/';

  getBrands(): Observable<ListResponseModel<Brand>> {
    const newPath=this.apiUrl+"getall";
    
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
