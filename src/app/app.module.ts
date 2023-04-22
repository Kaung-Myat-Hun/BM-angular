import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StepTwoComponent } from './step-one/step-two/step-two.component';

const routes : Routes =[
  {path: '' , component:HomePageComponent},
  {path: 'st-one', component: StepOneComponent},
  {
    path: 'pages',
    loadChildren: ()=> import('./pages/pages.module').then(m=> m.PageModule)
  },
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    PageNotFoundComponent,
    HomePageComponent,
    StepTwoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
