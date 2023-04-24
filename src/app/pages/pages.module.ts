import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HomePageComponent1} from './home-page/home-page.component'
import {SecondPageComponent} from './second-page/second-page.component'
import {ThirdPageComponent} from './third-page/third-page.component'
import {ForthPageComponent} from './forth-page/forth-page.component'
import {PageRoutingModule} from './pages.routing.module'
import { CarouselComponent } from "./home-page/carousel/carousel.component";

@NgModule({
    declarations: [HomePageComponent1, SecondPageComponent, ThirdPageComponent, ForthPageComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PageRoutingModule,
        CarouselComponent
    ]
})

export class PageModule {}
