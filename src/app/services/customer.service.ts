import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer'; 
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44325/api/Customers/";

  getCustomers():Observable<ListResponseModel<Customer>>{
    const newPath=this.apiUrl+"getAll";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
