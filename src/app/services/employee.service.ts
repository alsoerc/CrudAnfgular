import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { Global } from './globsl';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public logged:boolean = false;

  private url : string;

  constructor(private _employeeService: HttpClient) {
    this.url = Global.url;
  }

  getRecords(){
    return this._employeeService.get<Employee[]>(this.url + 'employees');
  }

  insertRecord(employee : Employee){
    return this._employeeService.post<Employee>(this.url + 'employees', employee);
  }

  updateRecord(employee : Employee , id: number){
    return this._employeeService.put(this.url + 'employees/' + id, employee)
  }

  deleteRecord(id: number){
    return this._employeeService.delete(this.url + 'employees/' + id);
  }

  getOneRecord(id: number){
    return this._employeeService.get<Employee>(this.url + 'employees/' +id);
  }

  login(){
    if(this.logged){
      return true;
  }else{
      return false;
  }

  }

}
