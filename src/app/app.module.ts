import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofallComponent } from './listofall/listofall.component';
import { JsonlistComponent } from './jsonlist/jsonlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ListofallComponent,
    JsonlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
