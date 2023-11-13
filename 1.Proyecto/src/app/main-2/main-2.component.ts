import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-2',
  templateUrl: './main-2.component.html',
  styleUrls: ['./main-2.component.scss']
})
export class Main2Component {
  containerVisible = false;

  toggleContainer() {
    this.containerVisible = !this.containerVisible;
  }
  containerVisibleX = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      subscribe: false
    });
  }

  toggleContainerX() {
    this.containerVisibleX = !this.containerVisibleX;
  }
  }



