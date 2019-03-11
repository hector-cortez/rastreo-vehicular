import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosReporteComponent } from './eventos-reporte.component';

describe('EventosReporteComponent', () => {
  let component: EventosReporteComponent;
  let fixture: ComponentFixture<EventosReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
