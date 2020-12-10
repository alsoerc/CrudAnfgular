import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit{
  

  employee = new Employee();
  employeeToEdit = new Employee();
  employees : Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'username', 'email', 'phoneNumber', 'actions'];
  dataSource;
  
  
  constructor(private _employeeService : EmployeeService, private _snackBar: MatSnackBar,private dialogo: MatDialog){
  }
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(){
    this.getEmployees();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit(){
    this._employeeService.insertRecord(this.employee).subscribe(
      success =>{
        this.openSnackBar('Agregado con éxito', 'Cerrar');
        this.getEmployees();
        this.resetForm();
      },
      err=>{
        this.openSnackBar('Error al registrar', 'Cerrar');
      }
    )
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

  openDialog(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: id
    }

    this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    const dialogRef = this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.getEmployees()
    )

  }

  deleteOneRecord(id: number){
    if(confirm('Confirmar eliminación de registro ' )){
      this.deleteRecord(id)
    }
  }
  
  deleteRecord(id: number){
    this._employeeService.deleteRecord(id).subscribe(
      success =>{
        this.openSnackBar('Eliminado con éxito', 'Cerrar');
        this.getEmployees();
      },
      err => {
        this.openSnackBar('Error al eliminar', 'Cerrar');
      }
    )
  }


  resetForm(){
    this.employee.id = 0;
    this.employee.name = '' ;
    this.employee.lastName = '' ;
    this.employee.username = '' ;
    this.employee.email = '' ;
    this.employee.phoneNumber = '' ;
  }




}