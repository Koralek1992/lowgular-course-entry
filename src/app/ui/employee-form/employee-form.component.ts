import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateEmployeeModel} from "../../model/create-employee.model";

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

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
  }

  onFormSubmitted(form: CreateEmployeeModel) {

  }
}
