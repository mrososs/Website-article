import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { main } from '@popperjs/core';

import { MainComponent } from './Component/main/main.component';
import { ToparticleComponent } from './Component/toparticle/toparticle.component';
import { AllarticleComponent } from './Component/allarticle/allarticle.component';
import { TechnologyComponent } from './Component/toparticle/technology/technology.component';
import { BussinessarticleComponent } from './Component/toparticle/bussinessarticle/bussinessarticle.component';
import { EntarticleComponent } from './Component/toparticle/entarticle/entarticle.component';
import { GeneralarticleComponent } from './Component/toparticle/generalarticle/generalarticle.component';
import { HealtharticleComponent } from './Component/toparticle/healtharticle/healtharticle.component';
import { SportsarticleComponent } from './Component/toparticle/sportsarticle/sportsarticle.component';
import { SciencearticleComponent } from './Component/toparticle/sciencearticle/sciencearticle.component';




const routes: Routes = [
  {path: '', component: MainComponent },
  
  {path:'toparticle' , component: ToparticleComponent},
  {path:'allarticle', component: AllarticleComponent },
  {path:'allarticle/technologyarticle',component: TechnologyComponent},
  {path:'allarticle/bussinessarticle',component:BussinessarticleComponent},
  {path:'allarticle/entarticle',component:EntarticleComponent},
  {path:'allarticle/genralarticle',component:GeneralarticleComponent},
  {path:'allarticle/healtharticle',component:HealtharticleComponent},
  {path:'allarticle/sciencearticle',component:SciencearticleComponent},
  {path:'allarticle/sportsarticle',component:SportsarticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
