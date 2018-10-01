import { Injectable } from '@angular/core';
import {Empleado} from './empleado.model' 
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
selectedEmployee : Empleado;
listaempleados : Empleado[];
  constructor(private http :Http) { }
postEmployee(emp: Empleado)
{
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({'Content-Type':'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  ////Cambiar http://localhost:62375/api/Empleadoes dependiendo del localhost levantado por VS
  return this.http.post('http://localhost:62375/api/Empleadoes',body,requestOptions).map(x => x.json());
}
PutEmpleado(id, emp) {
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('http://localhost:62375/api/Empleadoes/' + id, body, requestOptions).map(res => res.json());
}
GetEmpleados()
{
  this.http.get('http://localhost:62375//api/Empleadoes')
  .map((data : Response) =>{
    return data.json() as Empleado[];
  }).toPromise().then(x => {
    this.listaempleados = x;
  })
}
DeleteEmpleado(id: number) {
  return this.http.delete('http://localhost:62375//api/Empleadoes/' + id).map(res => res.json());
}

}


