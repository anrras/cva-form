import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaFormComponent } from './cva-form.component';
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { PasswordComponent } from './components/password/password.component';
import { DateComponent } from './components/date/date.component';
import { NumberComponent } from './components/number/number.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';

@NgModule({
  declarations: [CvaFormComponent, InputComponent, PasswordComponent, DateComponent, NumberComponent, TextareaComponent, SelectComponent, CheckboxComponent, RadioComponent],
  imports: [CommonModule, SharedModule],
  exports: [CvaFormComponent],
})
export class CvaFormModule {}
