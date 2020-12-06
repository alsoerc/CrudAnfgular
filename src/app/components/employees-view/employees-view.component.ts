import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit{
  

  employee = new Employee();
  employees : Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'username', 'email', 'phoneNumber'];
  
  constructor(private _employeeService : EmployeeService){
  }
  
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(){
    this.getEmployees();
  }

  onSubmit(){
    this.getEmployees();
    alert(this.employee.name + this.employee.lastName + this.employee.username + this.employee.email + this.employee.phoneNumber)
    this.resetForm();
  }

  getEmployees(){
    this._employeeService.getRecords().subscribe(
      success =>{
        console.log(success)
        this.employees  = success;
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;
      },
      err =>{
        console.log(err)
      }
    )
  }
  

  resetForm(){
    this.employee.name = '' ;
    this.employee.lastName = '' ;
    this.employee.username = '' ;
    this.employee.email = '' ;
    this.employee.phoneNumber = '' ;
  }



}