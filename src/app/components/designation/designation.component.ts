import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designtaionList: IDesignation[] = [];
  isLoader : boolean = true;
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((res:APIResponseModel) => {
      this.designtaionList = res.data;
      this.isLoader = false;
    },error => {
      alert("Api called failed");
      this.isLoader = false;
    })
  }


}
