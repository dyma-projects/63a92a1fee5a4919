import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component {
  statut: boolean = true;
  statut1: boolean = false;

  onButtonClick() {
    this.statut = !this.statut;
    this.statut1 = !this.statut1;
  }
}
