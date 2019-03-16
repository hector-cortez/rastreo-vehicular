import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';

export interface ListaVehiculos {
  nro: number;
  placa: string;
  alias: string;
  ultimoRegistro: string;
  velocidad: number;
  puntoCercano: string;
  calle: string;
  modem: string;
}

const ELEMENT_DATA: ListaVehiculos[] = [
  {nro: 1,  placa: '1736-XEG', alias: '1736-XEG', ultimoRegistro: '24/02/2019 23:03:21', velocidad: 0.00, puntoCercano: 'KM 1 AV LIBERTADOR S M (0.7 Km.)', calle: 'RAFAEL BUSTILLOS', modem: '1333124084' },
  {nro: 2,  placa: '2153-IXU', alias: '2153-IXU', ultimoRegistro: '08/02/2019 21:03:10', velocidad: 0.00, puntoCercano: 'KM 1 AV LIBERTADOR S M (0.7 Km.)', calle: 'PEDRO BLANCO',modem: 'RS-A008'},
  {nro: 3,  placa: '2190-GLI', alias: '2190-GLI', ultimoRegistro: '24/02/2019 22:59:53', velocidad: 0.00, puntoCercano: 'ZONA EL KENKO (1.3 Km.)', calle: 'ABEL ONDARZA',modem: 'TRS-A018'},
  {nro: 4,  placa: '2305-CBR', alias: '2305-CBR', ultimoRegistro: '24/02/2019 22:54:25', velocidad: 0.00, puntoCercano: 'Aeropuerto de Ilo (2.8 Km.)', calle: 'HUMBERTO FRIAS',modem: 'TRS-A009'},
  {nro: 5,  placa: '2541-CNA', alias: '2541-CNA', ultimoRegistro: '23/02/2019 17:46:13', velocidad: 0.00, puntoCercano: 'CIUDAD DE MOQUEGUA (2 Km.)', calle: 'QUEIPO DEL LLANO',modem: 'TRS-A009'},
  {nro: 6,  placa: '2541-CNA', alias: '2541-CNA', ultimoRegistro: '23/02/2019 17:46:13', velocidad: 0.00, puntoCercano: 'SURTIDOR-LA PAZ (0.1 Km.)', calle: 'PAZ NERY NAVIA',modem: 'TRS-A007'},
  {nro: 7,  placa: '2547-EST', alias: '2547-EST', ultimoRegistro: '24/02/2019 21:04:48', velocidad: 0.00, puntoCercano: 'RESTAURANT - CUNA (0.3 Km.)', calle: '27 PASEO DE GRACIA',modem: 'TRS-A007'},
  {nro: 8,  placa: '2552-TTD', alias: '2552-TTD', ultimoRegistro: '24/02/2019 07:10:42', velocidad: 0.00, puntoCercano: 'SURTIDOR-LA PAZ (0.2 Km.)', calle: 'LOS SARGENTOS',modem: '1333124062'},
  {nro: 9,  placa: '2806-TBL', alias: '2806-TBL', ultimoRegistro: '22/02/2019 16:59:47', velocidad: 0.00, puntoCercano: 'SURTIDOR-LA PAZ (0.1 Km.)', calle: 'PROF. RAUL BRAVO',modem: 'TRS_8674'},
  {nro: 10, placa: '2994-ZPD', alias: '2994-ZPD', ultimoRegistro: '24/02/2019 23:00:59', velocidad: 0.00, puntoCercano: 'PLANTA DE ALMACENAJE YPFB-LPZ (0.2 Km.)', calle: 'KOLLASUYO I',modem: 'TRS-A019'},
];

@Component({
  selector: 'app-paradas-reporte',
  templateUrl: './paradas-reporte.component.html',
  styleUrls: ['./paradas-reporte.component.css']
})
export class ParadasReporteComponent implements OnInit {
  displayedColumns: string[] = ['nro', 'ultimoRegistro', 'calle', 'puntoCercano'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  vehiculo = '';
  minutos = '';
  fDesde = '';
  fHasta = '';

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculo = params['vehiculo'];
      this.minutos = params['minutos'];
      this.fDesde = params['fdesde'];
      this.fHasta = params['fhasta'];
    });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
