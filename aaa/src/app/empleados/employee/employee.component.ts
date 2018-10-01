import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {EmployeeService} from '../shared/employee.service'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm)
  {
    if(form != null)
    form.reset();
    this.employeeService.selectedEmployee =
    {
      id_empleado : null,
      nombre: '',
      apellido: '',
      codigo_empleado: '',
      posicion: '',
      oficina: ''

    }
  }

  onSubmit(form:NgForm)
  {
    if(form.value.id_empleado == null){
    this.employeeService.postEmployee(form.value)
    .subscribe(data =>{
      this.toastr.success('Nuevo Registro Guardado Exitosamente','Registro de Usuario');
      this.resetForm(form);
      this.employeeService.GetEmpleados();
      
    })
  }
  else {
    this.employeeService.PutEmpleado(form.value.id_empleado, form.value)
    .subscribe(data => {
      this.resetForm(form);
      this.employeeService.GetEmpleados();
      this.toastr.info('Record Updated Successfully!', 'Employee Register');
    });
  }
}
}
