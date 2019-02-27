import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcesoVelocidadComponent } from './exceso-velocidad.component';

describe('ExcesoVelocidadComponent', () => {
  let component: ExcesoVelocidadComponent;
  let fixture: ComponentFixture<ExcesoVelocidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcesoVelocidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcesoVelocidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
