import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PosicionActualComponent } from './components/posicion-actual/posicion-actual.component';
import { RecorridoComponent } from './components/recorrido/recorrido.component';
import { TrazadoRecorridoComponent } from './components/trazado-recorrido/trazado-recorrido.component';
import { ExcesoVelocidadComponent } from './components/exceso-velocidad/exceso-velocidad.component';
import { ParadasComponent } from './components/paradas/paradas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

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
    EventosComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
