import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  currentDate: Date = new Date();
  clientObj: Client = new Client();
  clientList : Client[] = [];
  clientService = inject(ClientService);
  userList$: Observable<any> = new Observable<any>;
  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }
  loadClient(){
    this.clientService.getAllClient().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSave(){
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) =>{
      if(res.result){
        alert("Client created successfully")
        this.loadClient();
        this.clientObj = new Client();
      } else{
        alert(res.message)
      }
    })
  }

  onEdit(data: Client){
    this.clientObj = data;
  }

  onDelete(id: number){
    const isDelete = confirm("Are You Sure");
    if(isDelete){
      this.clientService.deleteClient(id).subscribe((res: APIResponseModel) =>{
        if(res.result){
          alert("Client Deleted successfully")
          this.loadClient();
        } else{
          alert(res.message)
        }
      })
    }
  }



}
