import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectlistComponent {
  data$: Observable<ProjectModel[]> | null = this._projectService.getAll();

  constructor(private _projectService: ProjectService) {
  }
}
