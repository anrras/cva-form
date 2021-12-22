import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultFormRoutingModule } from './default-form-routing.module';
import { DefaultFormComponent } from './components/default-form/default-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DefaultFormComponent],
  imports: [CommonModule, SharedModule, DefaultFormRoutingModule],
  exports: [DefaultFormComponent],
})
export class DefaultFormModule {}
