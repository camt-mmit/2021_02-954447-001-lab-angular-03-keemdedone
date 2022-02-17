import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // import to appModule only

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleConfigurationToken } from './google/models';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: GoogleConfigurationToken,
      useValue: environment.googleConfiguration,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
