import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PosicionActualComponent } from './posicion-actual/posicion-actual.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { TrazadoRecorridoComponent } from './trazado-recorrido/trazado-recorrido.component';
import { ExcesoVelocidadComponent } from './exceso-velocidad/exceso-velocidad.component';
import { ParadasComponent } from './paradas/paradas.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MonitoreoComponent,
    ReportesComponent,
    PosicionActualComponent,
    RecorridoComponent,
    TrazadoRecorridoComponent,
    ExcesoVelocidadComponent,
    ParadasComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
