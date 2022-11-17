import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../../services/employee.service';
import {CreateEmployeeModel} from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(1)]),
    salary: new FormControl(null, Validators.min(1))
  });

  constructor(private _employeeService: EmployeeService, private _httpClient: HttpClient) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create({name: form.name, age: form.age, salary: form.salary}).subscribe();

  }
}
