import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { Employee } from './../../model/employee';
import { EmployeeService } from "./../../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<Employee[]>;
  
  employeeInfo: any = {};

  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employeeInfo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employeeInfo = new Employee();
    this.gotoList(); 
  }

  gotoList() {
    this.router.navigate(['/employee']);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
