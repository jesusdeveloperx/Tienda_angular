import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent {
  containerVisible = false;

  toggleContainer() {
    this.containerVisible = !this.containerVisible;
  }
  containerVisibleB = false;

  toggleContainerB() {
    this.containerVisibleB = !this.containerVisibleB;
  }
  containerVisibleC = false;

  toggleContainerC() {
    this.containerVisibleC = !this.containerVisibleC;
  }
}

