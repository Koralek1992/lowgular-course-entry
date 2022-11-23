import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './ui/employee-list/employee-list.component';
import {EmployeeFormComponent} from './ui/employee-form/employee-form.component';
import {EmployeeLinksComponent} from './ui/employee-links/employee-links.component';
import {EmployeeDetailsComponent} from './ui/employee-details/employee-details.component';
import {EmployeeListComponentModule} from './ui/employee-list/employee-list.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {EmployeeFormComponentModule} from './ui/employee-form/employee-form.component-module';
import {EmployeeLinksComponentModule} from './ui/employee-links/employee-links.component-module';
import {EmployeeDetailsComponentModule} from './ui/employee-details/employee-details.component-module';

const routes: Routes = [
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'create-employee', component: EmployeeFormComponent},
  {path: '', component: EmployeeLinksComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'employee-details/:id/:name', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    EmployeeListComponentModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    EmployeeLinksComponentModule,
    EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
