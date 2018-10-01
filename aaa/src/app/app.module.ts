import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmployeeComponent } from './empleados/employee/employee.component';
import { EmployeeListComponent } from './empleados/employee-list/employee-list.component';
import {ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
