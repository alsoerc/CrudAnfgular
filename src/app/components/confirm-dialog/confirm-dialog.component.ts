import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Department } from 'src/app/models/Department';
import { Employee } from 'src/app/models/Employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  id:number;
  catalog : number;
  tittle : string;
  employee = new Employee();
  department = new Department();

  constructor(private _employeeService : EmployeeService,
    private _departmentService : DepartmentService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.id = data.id;
      this.catalog = data.catalog;
      this.tittle = data.title;
    }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 3000,
      });
    }

    closeDialog(): void {
      this.dialog.close(true);
    }
    

  ngOnInit() {
    if(this.catalog == 1){
      this.getOneEmployee();
    }else{
      this.getOneDepartment();
    }
    
  }

  confirmUpdate(){
    const errorMsg = 'Error al actualizar';
    const successMsg = 'Éxito al actualizar';
    if(this.catalog == 1){
      this.updateEmployee(successMsg, errorMsg);
    }else{
      this.updateDepartment(successMsg, errorMsg);
    }
  }

  getOneEmployee(){
    this._employeeService.getOneRecord(this.id).subscribe(
      success =>{
        this.employee = success;
      },
      error =>{
        alert(error);
      }
    )
  }

  getOneDepartment(){
    this._departmentService.getOneRecord(this.id).subscribe(
      success => {
        this.department = success;
      },
      err =>{
        console.log(err);
      }
    )
  }

  updateEmployee(successMsg : string, errorMsg){
    this._employeeService.updateRecord(this.employee, this.id).subscribe(
      success =>{
        this.closeDialog();
        this.openSnackBar(successMsg, 'Cerrar');
      },
      err => {
        this.openSnackBar(errorMsg, 'Cerrar');
      }
    )
  }

  updateDepartment(successMsg : string, errorMsg){
    this._departmentService.updateRecord(this.department, this.id).subscribe(
      success =>{
        this.closeDialog();
        this.openSnackBar(successMsg, 'Cerrar');
      },
      err => {
        this.openSnackBar(errorMsg, 'Cerrar');
      }
    )
  }




}
