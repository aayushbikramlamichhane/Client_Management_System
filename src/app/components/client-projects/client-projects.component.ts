import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-projects',
  imports: [ReactiveFormsModule],
  templateUrl: './client-projects.component.html',
  styleUrl: './client-projects.component.css'
})
export class ClientProjectsComponent implements OnInit{

  projectForm : FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedDateEnd: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  clientService = inject(ClientService);
  employeeList: Employee[] = []
  clientList: Client[] = []
  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel) =>{
      this.employeeList = res.data;
    })
  }
  getAllClient(){
    this.clientService.getAllClient().subscribe((res:APIResponseModel) =>{
      this.clientList = res.data;
    })
  }

  onSave(){
    const formValue = this.projectForm.value;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) =>{
      if(res.result){
        alert("Project Created Successfully")
      } else{
        alert(res.message)
      }
    })
  }
}
