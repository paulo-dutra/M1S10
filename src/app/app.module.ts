import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BotoesFiltroComponent } from './components/botoes-filtro/botoes-filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path:'todos',
        component: HomeComponent
      },
      {
        path:'nao-lidos',
        component: HomeComponent
      },
      {
        path:'lidos',
        component: HomeComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BotoesFiltroComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
