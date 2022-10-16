import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MainComponent } from './Component/main/main.component';
import { ToparticleComponent } from './Component/toparticle/toparticle.component';
import { AllarticleComponent } from './Component/allarticle/allarticle.component';
import{ArticleService} from './article.service';
import{NgxPaginationModule} from 'ngx-pagination';
import { TechnologyComponent } from './Component/toparticle/technology/technology.component';
import { SearchComponent } from './search/search.component';
import { BussinessarticleComponent } from './Component/toparticle/bussinessarticle/bussinessarticle.component';
import { EntarticleComponent } from './Component/toparticle/entarticle/entarticle.component';
import { GeneralarticleComponent } from './Component/toparticle/generalarticle/generalarticle.component';
import { HealtharticleComponent } from './Component/toparticle/healtharticle/healtharticle.component';
import { SciencearticleComponent } from './Component/toparticle/sciencearticle/sciencearticle.component';
import { SportsarticleComponent } from './Component/toparticle/sportsarticle/sportsarticle.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
   
    
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MainComponent,
    ToparticleComponent,
    AllarticleComponent,
    TechnologyComponent,
    SearchComponent,
    BussinessarticleComponent,
    EntarticleComponent,
    GeneralarticleComponent,
    HealtharticleComponent,
    SciencearticleComponent,
    SportsarticleComponent,
    
   

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule

  ],
    
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
