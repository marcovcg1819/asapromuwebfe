import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {NosotrosbodyComponent} from './components/nosotrosbody/nosotrosbody.component';
import {IniciobodyComponent} from './components/iniciobody/iniciobody.component';
import { DonacionesbodyComponent } from './components/donacionesbody/donacionesbody.component';
import { ProyectosbodyComponent } from './components/proyectosbody/proyectosbody.component';
import { ContactanosbodyComponent } from './components/contactanosbody/contactanosbody.component';

const routes: Routes = [
  {path: '', component:IniciobodyComponent, pathMatch: 'full'},
  {path: 'nosotros', component:NosotrosbodyComponent},
  {path: 'donaciones', component:DonacionesbodyComponent},
  {path: 'proyectos', component:ProyectosbodyComponent},
  {path: 'contact', component:ContactanosbodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
