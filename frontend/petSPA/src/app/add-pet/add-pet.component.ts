import { Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import { first } from 'rxjs/operators';
import { PetService } from '../_services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  newPetForm: FormGroup;
  description: string;
  submitted = false;

  constructor(private snackBar: MatSnackBar,private petService: PetService, private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddPetComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = data.description;
  }

  ngOnInit() {
    this.newPetForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required]
  });
}
get f() { return this.newPetForm.controls; }

  submit(newPetForm){
    this.submitted = true;

    if (this.newPetForm.invalid) {
      return;
    }

   this.petService.addPet(this.newPetForm.value)
      .pipe(first())
      .subscribe(
          data => {
            this.snackBar.open('Pet Added Correctly', 'Undo', {
              duration: 3000
            });
            this.submitted = false;
            this.dialogRef.close();
          },
          error => {
            this.submitted = false;
            this.dialogRef.close();
          }); 
  }

}
