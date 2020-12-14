import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  department = new Department();
  departmentToEdit = new Department();
  departments : Department[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource;

  constructor(private _departmentService : DepartmentService,
    private _snackBar : MatSnackBar,
    private dialogo: MatDialog) { }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getDepartments();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getDepartments(){
    this._departmentService.getRecords().subscribe(
      success => {
        this.departments = success;
        this.dataSource = new MatTableDataSource<Department>(this.departments);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  onSubmit(){
    this._departmentService.insertRecord(this.department).subscribe(
      success =>{
        this.openSnackBar('Agregado con éxito', 'Cerrar');
        this.getDepartments();
        this.resetForm();
      },
      err =>{
        console.log(err)
      }
    )
  }

  deleteOneRecord(id:number){
    if(confirm('Confirmar eliminación de registro ' )){
      this.deleteRecord(id)
    }
  }

  deleteRecord(id:number){
    this._departmentService.deleteRecord(id).subscribe(
      success => {
        this.openSnackBar('Eliminado con éxito', 'Cerrar');
        this.getDepartments();
      },
      err =>{
        console.log(err);
      }
    )
  }
  openDialog(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      catalog : 2,
      id: id

    }

    this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    const dialogRef = this.dialogo.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.getDepartments()
    )
  }

  resetForm(){
    this.department.id = 0;
    this.department.name = '';
    this.department.description = '';
  }




}
