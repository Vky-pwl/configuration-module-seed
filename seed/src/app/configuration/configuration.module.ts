import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfigurationComponent} from './configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing/configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule {}
