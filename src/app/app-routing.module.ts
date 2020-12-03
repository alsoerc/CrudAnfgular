import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DepartmentViewComponent} from './components/department-view/department-view.component';
import {EmployeesViewComponent} from './components/employees-view/employees-view.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'employees', component: EmployeesViewComponent},
  {path: 'departments', component: DepartmentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
