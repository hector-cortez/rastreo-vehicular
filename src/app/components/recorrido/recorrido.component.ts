import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RouterModule, Router } from '@angular/router';

export interface Vehiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.css']
})
export class RecorridoComponent implements OnInit {
  @ViewChild('fDesde') fDesde: ElementRef;
  @ViewChild('fHasta') fHasta: ElementRef;
  
  vehiculos: Vehiculo[] = [
    {value: '2153-IXU', viewValue: '2153-IXU-2153-IXU'},
    {value: '2190-GLI', viewValue: '2190-GLI-2190-GLI'},
    {value: '2305-CBR', viewValue: '2305-CBR-2305-CBR'},
    {value: '2541-CNA', viewValue: '2541-CNA-2541-CNA'},
    {value: '2547-EST', viewValue: '2547-EST-2547-EST'},
    {value: '2552-TTD', viewValue: '2552-TTD-2552-TTD'},
    {value: '2806-TBL', viewValue: '2806-TBL-2806-TBL'},
    {value: '2994-ZPD', viewValue: '2994-ZPD-2994-ZPD'},
    {value: '251-YXX', viewValue: '251-YXX-4251-YXX'},
  ];

  selVehiculo = '';
  // fDesde = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  mostrarRecorrido(): void {
    console.log(this.selVehiculo);
    console.log(this.fDesde.nativeElement.value);
    this.router.navigate(["recorrido-mostrar", this.selVehiculo, this.fDesde.nativeElement.value, this.fHasta.nativeElement.value]);
  }

}
