import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadasReporteComponent } from './paradas-reporte.component';

describe('ParadasReporteComponent', () => {
  let component: ParadasReporteComponent;
  let fixture: ComponentFixture<ParadasReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadasReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadasReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
