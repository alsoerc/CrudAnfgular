import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Articulo } from 'src/app/models/Articulo';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['id', 'name', 'lastName', 'username', 'email', 'tel'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  username: string;
  email:string;
  tel:string;
}

const ELEMENT_DATA: User[] = [
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' },
  { id: 1, name: 'Juan Pérez',lastName:"Pérez" , username:'exkapp', email: "exkapp@gmail.com", tel: '2711726330' }
];
