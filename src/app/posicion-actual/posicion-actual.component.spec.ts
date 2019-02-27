import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionActualComponent } from './posicion-actual.component';

describe('PosicionActualComponent', () => {
  let component: PosicionActualComponent;
  let fixture: ComponentFixture<PosicionActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
