import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazadoRecorridoComponent } from './trazado-recorrido.component';

describe('TrazadoRecorridoComponent', () => {
  let component: TrazadoRecorridoComponent;
  let fixture: ComponentFixture<TrazadoRecorridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazadoRecorridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazadoRecorridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
