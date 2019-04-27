import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import { first } from 'rxjs/operators';
import { PetService } from '../_services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  editPetForm: FormGroup;
  title: string;
  pet : any;
  submitted = false;

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private petService: PetService,
     private dialogRef: MatDialogRef<EditPetComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
      this.pet = data.pet;
      }

  ngOnInit() {
    this.editPetForm = this.formBuilder.group({
      id: [this.pet.id, Validators.required],
      name: [this.pet.name, Validators.required],
      type: [this.pet.type, Validators.required]
    });
  }

  get f() { return this.editPetForm.controls; }

  submit(editPetForm){
    this.submitted = true;

    if (this.editPetForm.invalid) {
      return;
    }

   this.petService.editPet(this.editPetForm.value)
      .pipe(first())
      .subscribe(
          data => {
            this.snackBar.open('Pet Edited Correctly', 'Undo', {
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
