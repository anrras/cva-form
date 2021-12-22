import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CvaFormModule } from '@cva-form/cva-form.module';
import { DefaultFormModule } from '@default-form/default-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DefaultFormModule, CvaFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
