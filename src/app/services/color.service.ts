import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color'; 
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44325/api/colors/';

  getcolors():Observable<ListResponseModel<Color>>{
    const newPath=this.apiUrl+"getAll";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
