import { Component, OnInit } from '@angular/core';

import {EmployeeService} from './shared/employee.service'
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmployeeService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
