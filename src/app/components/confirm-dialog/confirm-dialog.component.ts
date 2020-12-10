import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  id:number;
  tittle : string;
  employee = new Employee();

  constructor(private _employeeService : EmployeeService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.id = data.id;
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
    this.getOneRecord();
  }

  confirmUpdate(){
    const errorMsg = 'Error al actualizar';
    const successMsg = 'Éxito al actualizar';
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

  getOneRecord(){
    this._employeeService.getOneRecord(this.id).subscribe(
      success =>{
        this.employee = success;
      },
      error =>{
        alert(error);
      }
    )
  }



}
