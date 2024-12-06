import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllClientProject():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT)
  }
  getAllClient():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }

  getAllEmployee():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }

  addUpdate(obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE ,obj)
  }

  deleteClient(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL + Constant.API_METHOD.DELETE_CLIENT + id)
  }

  addClientProjectUpdate (obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_CLIENT_PROJECT ,obj)
  }
}
