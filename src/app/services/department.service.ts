import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/Department';
import { Global } from './globsl';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url : string;

  constructor(private __departmentService : HttpClient) {
    this.url = Global.url;
  }

  getRecords(){
    return this.__departmentService.get<Department[]>(this.url + 'departments');
  }

  insertRecord(department : Department){
    return this.__departmentService.post<Department>(this.url + 'departments', department);
  }

  updateRecord(department : Department, id:number){
    return this.__departmentService.put(this.url + 'departments/'+ id, department);
  }

  deleteRecord(id:number){
    return this.__departmentService.delete(this.url + 'departments/' + id);
  }

  getOneRecord(id:number){
    return this.__departmentService.get<Department>(this.url + 'departments/' + id);
  }

}
