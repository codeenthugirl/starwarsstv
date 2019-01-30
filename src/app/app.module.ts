import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofallComponent } from './listofall/listofall.component';
import { JsonlistComponent } from './jsonlist/jsonlist.component';
import { Starwarservice } from './starwars.service';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';



@NgModule({
  declarations: [
    AppComponent,
    ListofallComponent,
    JsonlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwSocialButtonsModule,
  ],
  providers: [Starwarservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
