import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent1} from './home-page/home-page.component'
import {SecondPageComponent} from './second-page/second-page.component'
import {ThirdPageComponent} from './third-page/third-page.component'
import {ForthPageComponent} from './forth-page/forth-page.component'
import {SecondMainPageComponent} from './second-main-page/second-main-page.component'
import {CarouselComponent} from './home-page/carousel/carousel.component'
import {StepOneComponent} from '../step-one/step-one.component'

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path: 'home',
        component: HomePageComponent1
      },
      {
        path: 'second',
        component: SecondPageComponent
      },
      {
        path: 'third',
        component: ThirdPageComponent
      },
      {
        path: 'forth',
        component: ForthPageComponent
      },
      {
        path: 'second-main',
        component: SecondMainPageComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: ':id',
        component: StepOneComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }
