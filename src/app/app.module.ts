import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StepTwoComponent } from './step-one/step-two/step-two.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { ForthPageComponent } from './pages/forth-page/forth-page.component'

const routes : Routes =[
  {path: '' , component:HomePageComponent},
  {path: 'st-one', component: StepOneComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    PageNotFoundComponent,
    HomePageComponent,
    StepTwoComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ForthPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
