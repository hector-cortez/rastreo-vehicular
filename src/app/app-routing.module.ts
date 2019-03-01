import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PosicionActualComponent } from './components/posicion-actual/posicion-actual.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'PosicionActual', component: PosicionActualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
