import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  something: string = '';
  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.something = '';
  }

  listenToInput(event: string) {
    this.something = event;
  }
}
