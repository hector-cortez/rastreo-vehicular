import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridoMostrarComponent } from './recorrido-mostrar.component';

describe('RecorridoMostrarComponent', () => {
  let component: RecorridoMostrarComponent;
  let fixture: ComponentFixture<RecorridoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorridoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
