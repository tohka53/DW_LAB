import { Component, OnInit } from '@angular/core';


import {EmployeeService} from '../shared/employee.service'
import{Empleado} from '../shared/empleado.model'
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr : ToastrService) { }

  ngOnInit()
   {
    this.employeeService.GetEmpleados(); 
  }
  showForEdit(emp: Empleado) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);;
  }

  onDelete(id : number){
    if(confirm('Esta seguro de eliminar')==true){
    this.employeeService.DeleteEmpleado(id)
    .subscribe(x=>{
      this.employeeService.GetEmpleados();
      this.toastr.warning("Registro Eliminado","Empleado Eliminado")
    })
  }
  }



}
