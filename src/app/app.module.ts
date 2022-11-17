import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {FacesComponentModule} from "./ui/faces/faces.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectlistComponentModule} from "./ui/projectlistcomponent/projectlist.component-module";
import {ProjectServiceModule} from "./services/project.service-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {UserFormComponentModule} from "./ui/user-form/user-form.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    FacesComponentModule,
    ProjectlistComponentModule,
    ProjectServiceModule,
    EmployeeFormComponentModule,
    UserFormComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
