import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Interface para firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
import { RecorridoMostrarComponent } from './components/recorrido-mostrar/recorrido-mostrar.component';
import { ExcesoVelocidadReporteComponent } from './components/exceso-velocidad-reporte/exceso-velocidad-reporte.component';
import { ParadasReporteComponent } from './components/paradas-reporte/paradas-reporte.component';
import { EventosReporteComponent } from './components/eventos-reporte/eventos-reporte.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,  } from '@angular/material';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { PosicionActualMostrarComponent } from './components/posicion-actual-mostrar/posicion-actual-mostrar.component';


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
    MenuNavComponent,
    RecorridoMostrarComponent,
    ExcesoVelocidadReporteComponent,
    ParadasReporteComponent,
    EventosReporteComponent,
    PosicionActualMostrarComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [
    MatDatepickerModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
