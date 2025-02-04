import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  currentView: string = 'credit-app';

  // Méthode pour changer de vue
  ngOnInit(): void {
   
  }
  
  switchView(view: string): void {
    this.currentView = view;
  }

   
}
