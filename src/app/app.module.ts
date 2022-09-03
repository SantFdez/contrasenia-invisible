import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { IntroComponent } from './components/intro/intro.component';
import { D1Component } from './components/d1/d1.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MessageComponent } from './components/message/message.component';
import { EsperoComponent } from './components/d2/espero/espero.component';
import { BuscaralguienComponent } from './components/d2/buscaralguien/buscaralguien.component';
import { SigobebiendoComponent } from './components/d3/sigobebiendo/sigobebiendo.component';
import { VacilarComponent } from './components/d3/vacilar/vacilar.component';
import { HacertareaComponent } from './components/d3/hacertarea/hacertarea.component';
import { QuereraveriguarComponent } from './components/d4/quereraveriguar/quereraveriguar.component';
import { YasaberComponent } from './components/d4/yasaber/yasaber.component';
import { ExamenesComponent } from './components/d5/examenes/examenes.component';
import { CopiarComponent } from './components/d6/copiar/copiar.component';
import { EstudiarComponent } from './components/d6/estudiar/estudiar.component';
import { HablarComponent } from './components/d7/hablar/hablar.component';
import { IrcasaComponent } from './components/d7/ircasa/ircasa.component';
import { IrfiestaComponent } from './components/d7/irfiesta/irfiesta.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AmigoComponent } from './components/d8/amigo/amigo.component';
import { PsicologoComponent } from './components/d8/psicologo/psicologo.component';
import { InternetComponent } from './components/d8/internet/internet.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InstaComponent } from './components/insta/insta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    D1Component,
    MessageComponent,
    EsperoComponent,
    BuscaralguienComponent,
    SigobebiendoComponent,
    VacilarComponent,
    HacertareaComponent,
    QuereraveriguarComponent,
    YasaberComponent,
    ExamenesComponent,
    CopiarComponent,
    EstudiarComponent,
    HablarComponent,
    IrcasaComponent,
    IrfiestaComponent,
    AmigoComponent,
    PsicologoComponent,
    InternetComponent,
    InstaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NzProgressModule,
    NzModalModule,
    NzButtonModule,
    NzGridModule,
    NzSpinModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
