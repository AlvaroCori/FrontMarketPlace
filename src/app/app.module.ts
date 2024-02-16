import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    AuthenticationModule,
    MainModule
  ],
  schemas :[ CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
