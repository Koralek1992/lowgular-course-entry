import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PersonModel} from '../model/person.model';
import {ApiResponse} from './api.response';
import {EmployeeResponse} from '../model/employee.response';
import {CreateEmployeeModel} from '../model/create-employee.model';
import {EmployeeModel} from '../model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              name: employeeResponse.employee_name,
              personalNumber: employeeResponse.id,
              mail: employeeResponse.employee_name + '@lowgular.io',
              img: employeeResponse.profile_image
            }
          })
        })
      )
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  delete(id: string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete' + id);
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>('https://dummy.restapiexample.com/api/v1/employee/' + id).pipe(
      map((response: ApiResponse<EmployeeResponse>): EmployeeModel => ({
        id: response.data.id,
        image: response.data.profile_image,
        email: '',
        name: response.data.employee_name
      })))
  }
}
