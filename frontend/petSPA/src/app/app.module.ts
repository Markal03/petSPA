import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import {MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatTableModule} from '@angular/material/table';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatLineModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
