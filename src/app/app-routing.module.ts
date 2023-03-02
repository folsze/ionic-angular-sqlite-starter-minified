import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employee-dept/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee-dept/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./pages/employee-dept/department/department.module').then( m => m.DepartmentPageModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./pages/employee-dept/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
