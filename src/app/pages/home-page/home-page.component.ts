import { Component } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent1 {
  count = 0;
  addFun(){
    this.count ++
  }
}
