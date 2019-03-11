import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { PosicionActualComponent } from './components/posicion-actual/posicion-actual.component';
import { RecorridoComponent } from './components/recorrido/recorrido.component';
import { TrazadoRecorridoComponent } from './components/trazado-recorrido/trazado-recorrido.component';
import { ExcesoVelocidadComponent } from './components/exceso-velocidad/exceso-velocidad.component';
import { ParadasComponent } from './components/paradas/paradas.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RecorridoMostrarComponent } from './components/recorrido-mostrar/recorrido-mostrar.component';
import { ExcesoVelocidadReporteComponent } from './components/exceso-velocidad-reporte/exceso-velocidad-reporte.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-nav',  component: MenuNavComponent },
  { path: 'posicion-actual', component: PosicionActualComponent },
  { path: 'recorrido', component: RecorridoComponent },
  { path: 'recorrido-mostrar', component: RecorridoMostrarComponent },
  { path: 'trazado-recorrido', component: TrazadoRecorridoComponent },
  { path: 'exceso-velocidad', component: ExcesoVelocidadComponent },
  { path: 'exceso-velocidad-reporte', component: ExcesoVelocidadReporteComponent },
  { path: 'paradas', component: ParadasComponent },
  { path: 'eventos', component: EventosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
