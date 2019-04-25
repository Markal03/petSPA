import { Component } from '@angular/core';


export interface Pet {
  id: string;
  name: string;
  type: string;
}

const PET_DATA: Pet[] = [
  {id: '1', name: 'Pet1', type: "dog"},
  {id: '2', name: 'Pet2', type: "cat"},
  {id: '3', name: 'Pet3', type: "hamster"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'petSPA';
  displayedColumns: string[] = ['id', 'name', 'type', 'edit', 'delete'];
  dataSource = PET_DATA;
}
