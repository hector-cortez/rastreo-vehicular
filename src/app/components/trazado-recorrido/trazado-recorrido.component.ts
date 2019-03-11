import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-trazado-recorrido',
  templateUrl: './trazado-recorrido.component.html',
  styleUrls: ['./trazado-recorrido.component.css']
})
export class TrazadoRecorridoComponent implements OnInit {

  /*
  constructor() { }
-16.525708,-68.1432091
  */
 latitude: number = -16.525708;
 longitude: number = -68.1432091;

 map: any;

 ngOnInit() {
   this.map = new ol.Map({
     target: 'map',
     layers: [
       new ol.layer.Tile({
         source: new ol.source.OSM()
       })
     ],
     view: new ol.View({
       center: ol.proj.fromLonLat([-68.1432091, -16.525708]),
       zoom: 8
     })
   });
 }

}
