import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { CountryComponent } from '../country/country.component';
import { CollegeComponent } from '../college/college.component';
import { PermissionComponent } from '../permission/permission.component';
import { SpecificationComponent } from '../specification/specification.component';




const routing: Routes = [{
    path: '/country',
    component: CountryComponent
  },
  {
    path: '/college',
    component: CollegeComponent
  },
  {
    path: '/permission',
    component: PermissionComponent
  },
  {
    path: '/specification',
    component: SpecificationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ],
  declarations: []
})
export class ConfigurationRoutingModule { }
