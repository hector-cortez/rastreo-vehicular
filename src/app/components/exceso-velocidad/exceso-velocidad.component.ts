import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RouterModule, Router } from '@angular/router';

export interface Vehiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-exceso-velocidad',
  templateUrl: './exceso-velocidad.component.html',
  styleUrls: ['./exceso-velocidad.component.css']
})
export class ExcesoVelocidadComponent implements OnInit {
  
  vehiculos: Vehiculo[] = [
    {value: '1', viewValue: '2153-IXU-2153-IXU'},
    {value: '2', viewValue: '2190-GLI-2190-GLI'},
    {value: '3', viewValue: '2305-CBR-2305-CBR'},
    {value: '4', viewValue: '2541-CNA-2541-CNA'},
    {value: '5', viewValue: '2547-EST-2547-EST'},
    {value: '6', viewValue: '2552-TTD-2552-TTD'},
    {value: '7', viewValue: '2806-TBL-2806-TBL'},
    {value: '8', viewValue: '2994-ZPD-2994-ZPD'},
    {value: '9', viewValue: '251-YXX-4251-YXX'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  mostrarReporte(): void {
     this.router.navigate(["exceso-velocidad-reporte"]);
  }

}
