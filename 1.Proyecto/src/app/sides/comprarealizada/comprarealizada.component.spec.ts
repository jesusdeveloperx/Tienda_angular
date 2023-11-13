import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarealizadaComponent } from './compraRealizada.component';

describe('ComprarealizadaComponent', () => {
  let component: ComprarealizadaComponent;
  let fixture: ComponentFixture<ComprarealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarealizadaComponent]
    });
    fixture = TestBed.createComponent(ComprarealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
