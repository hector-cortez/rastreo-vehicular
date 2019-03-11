import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionActualMostrarComponent } from './posicion-actual-mostrar.component';

describe('PosicionActualMostrarComponent', () => {
  let component: PosicionActualMostrarComponent;
  let fixture: ComponentFixture<PosicionActualMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionActualMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionActualMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
