import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-roles',
  imports: [CommonModule,FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roleList: IRole [] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles(){
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
    .subscribe((res:APIResponseModel) => {
      this.roleList = res.data;
    })
  }
}
