import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

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
  
  
  constructor(private _employeeService : EmployeeService, private _snackBar: MatSnackBar){
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

  getOneEmployee(id: number){
    this.employeeToEdit.id = id;
    this._employeeService.getOneRecord(this.employeeToEdit.id).subscribe(
      success => {
        this.employeeToEdit = success;
        this.openSnackBar(this.employeeToEdit.name, 'Cerrar');
      },
      err =>{
        console.log(err)
        alert('Error!!')
      }
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