import {NgModule} from '@angular/core';
import {ProjectlistComponent} from './projectlist.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectlistComponent],
  providers: [],
  exports: [ProjectlistComponent]
})
export class ProjectlistComponentModule {
}
