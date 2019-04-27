import { Component } from '@angular/core';
import { PetService } from './_services/pet.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';


export interface Pet {
  id: string;
  name: string;
  type: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'petSPA';
  displayedColumns: string[] = ['id', 'name', 'type', 'edit', 'delete'];
  dataSource : Pet[] = [];

  pets: any[];
  loadedPets: any;
  constructor(private snackBar: MatSnackBar, private petService: PetService, private dialog: MatDialog) { }

  openAddPetDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Add a new Pet'
    };

    this.dialog.open(AddPetComponent, dialogConfig);
    
    this.dialog.afterAllClosed.subscribe(() => {
      this.loadAllPets();
    }) 
  }

  openEditPetDialog(i){
    let pet = this.dataSource[i];

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        pet: pet,
        title: 'Edit existing pet'
    };

    this.dialog.open(EditPetComponent, dialogConfig);
    
    this.dialog.afterAllClosed.subscribe(() => {
      this.loadAllPets();
    })
  }
  ngOnInit(){
    this.loadAllPets();  
  }

  private deletePet(i){
    let pet = this.dataSource[i];
      this.petService.deletePet(pet.id).subscribe(() => {

        this.snackBar.open('Pet Added Correctly', 'Undo', {
          duration: 3000
        });

        this.loadAllPets();
      },
      (err) => {
        console.log(err);
        alert("Ooooops! Something went wrong, pet not deleted");
      })
    }

  private loadAllPets() {
    this.petService.getPets().pipe().subscribe(loadedPets => { 
        this.loadedPets = loadedPets;
        this.dataSource = this.loadedPets.results;
    },
    (err) =>{
        alert("Ooooops! Something went wrong, please reload the page");
    });
  }
}
