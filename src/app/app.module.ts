import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciobodyComponent } from './components/iniciobody/iniciobody.component';
import { NosotrosbodyComponent } from './components/nosotrosbody/nosotrosbody.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DonacionesbodyComponent } from './components/donacionesbody/donacionesbody.component';
import { ProyectosbodyComponent } from './components/proyectosbody/proyectosbody.component';
import { ContactanosbodyComponent } from './components/contactanosbody/contactanosbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IniciobodyComponent,
    NosotrosbodyComponent,
    NosotrosComponent,
    DonacionesbodyComponent,
    ProyectosbodyComponent,
    ContactanosbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
