import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component'

const routes : Routes =[
  {path: 'st-one', component: StepOneComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
