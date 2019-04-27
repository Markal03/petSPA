import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { MatLineModule, MatRippleModule } from '@angular/material/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetService } from './_services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPetComponent } from './edit-pet/edit-pet.component';

import {
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSnackBar,
  MatSnackBarModule
} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddPetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatLineModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatToolbarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    CdkColumnDef,
    PetService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddPetComponent, EditPetComponent]
})
export class AppModule { }
