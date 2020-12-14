import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DepartmentViewComponent} from './components/department-view/department-view.component';
import {EmployeesViewComponent} from './components/employees-view/employees-view.component';
import { AuthGuard } from './services/AuthGuard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'employees', component: EmployeesViewComponent, canActivate: [AuthGuard]},
  {path: 'departments', component: DepartmentViewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
