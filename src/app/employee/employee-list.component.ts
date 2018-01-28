import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  title = 'Mystery Corporation Employee Tools';
  pageTitle='Employee List';
  errorMessage:string;

  employeeList:IEmployee[]=[];
  filteredEmployeeList:IEmployee[]=[]; 

  private _lastNameFilter:string='A';
  
  constructor(private _empService:EmployeeService){}

  get listFilter():string{
      return this._lastNameFilter;
  }
  
  set listFilter(value: string){
    this._lastNameFilter=value;
  }

  ngOnInit() {
      this._empService.getEmployeeByLastName('Facello')
            .subscribe(emps =>{
              this.employeeList = emps,
              this.filteredEmployeeList = emps
            },
            error => this.errorMessage = <any>error
            );

  }
}