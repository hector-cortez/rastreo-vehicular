import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcesoVelocidadReporteComponent } from './exceso-velocidad-reporte.component';

describe('ExcesoVelocidadReporteComponent', () => {
  let component: ExcesoVelocidadReporteComponent;
  let fixture: ComponentFixture<ExcesoVelocidadReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcesoVelocidadReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcesoVelocidadReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
