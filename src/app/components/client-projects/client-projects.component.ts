import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-projects',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-projects.component.html',
  styleUrl: './client-projects.component.css'
})
export class ClientProjectsComponent implements OnInit{

  projectForm : FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required,Validators.minLength(4)]),
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

  firstName = signal("Aayush");
  projectList = signal<ClientProject[]>([])

  ngOnInit(): void {
    const name = this.firstName();
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  changeName(){
    this.firstName.set("")
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

  getAllClientProject(){
    this.clientService.getAllClientProject().subscribe((res:APIResponseModel) =>{
      this.projectList.set(res.data);
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
