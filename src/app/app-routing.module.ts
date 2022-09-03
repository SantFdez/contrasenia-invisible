import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { IntroComponent } from './components/intro/intro.component';
import { D1Component } from './components/d1/d1.component';
import { EsperoComponent } from './components/d2/espero/espero.component';
import { BuscaralguienComponent } from './components/d2/buscaralguien/buscaralguien.component';
import { HacertareaComponent } from './components/d3/hacertarea/hacertarea.component';
import { SigobebiendoComponent } from './components/d3/sigobebiendo/sigobebiendo.component';
import { VacilarComponent } from './components/d3/vacilar/vacilar.component';
import { YasaberComponent } from './components/d4/yasaber/yasaber.component';
import { QuereraveriguarComponent } from './components/d4/quereraveriguar/quereraveriguar.component';
import { ExamenesComponent } from './components/d5/examenes/examenes.component';
import { EstudiarComponent } from './components/d6/estudiar/estudiar.component';
import { CopiarComponent } from './components/d6/copiar/copiar.component';
import { IrcasaComponent } from './components/d7/ircasa/ircasa.component';
import { IrfiestaComponent } from './components/d7/irfiesta/irfiesta.component';
import { HablarComponent } from './components/d7/hablar/hablar.component';
import { AmigoComponent } from './components/d8/amigo/amigo.component';
import { PsicologoComponent } from './components/d8/psicologo/psicologo.component';
import { InternetComponent } from './components/d8/internet/internet.component';
import { InstaComponent } from './components/insta/insta.component';



const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'd1', component: D1Component },
  { path: 'd2/esperar', component: EsperoComponent },
  { path: 'd2/buscaralguien', component: BuscaralguienComponent },
  { path: 'd3/hacertarea', component: HacertareaComponent },
  { path: 'd3/seguirbebiendo', component: SigobebiendoComponent },
  { path: 'd3/vacilar', component: VacilarComponent },
  { path: 'd4/quereraveriguar', component: QuereraveriguarComponent },
  { path: 'd4/nointeresar', component: YasaberComponent },
  { path: 'd4/yasaber', component: YasaberComponent },
  { path: 'd5/examenes', component: ExamenesComponent },
  { path: 'd6/copiar', component: CopiarComponent },
  { path: 'd6/estudiar', component: EstudiarComponent },
  { path: 'd6/dormir', component: CopiarComponent },
  { path: 'd7/hablar', component: HablarComponent },
  { path: 'd7/ircasa', component: IrcasaComponent },
  { path: 'd7/irfiesta', component: IrfiestaComponent },
  { path: 'd8/amigo', component: AmigoComponent },
  { path: 'd8/psicologo', component: PsicologoComponent },
  { path: 'd8/internet', component: InternetComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'insta', component: InstaComponent },
  { path: '', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
