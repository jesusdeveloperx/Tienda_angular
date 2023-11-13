import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujerComponent } from './mujer.component';

describe('MujerComponent', () => {
  let component: MujerComponent;
  let fixture: ComponentFixture<MujerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MujerComponent]
    });
    fixture = TestBed.createComponent(MujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
