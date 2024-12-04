import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList : Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
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
