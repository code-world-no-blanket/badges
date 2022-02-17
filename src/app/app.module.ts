import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgesComponent } from './badges/badges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { BadgeInfoComponent } from './badge-info/badge-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    BadgeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
