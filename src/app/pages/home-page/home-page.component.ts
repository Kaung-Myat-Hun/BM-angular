import { Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent1 {
  count = 0;
  addFun(){
    this.count ++
  }

  sayHello(){
    window.alert('Hello User')
  }

  mark=0;
  addMark(){
    this.mark ++
  }
  minusMark(){
    if (this.mark == 0) {
      window.alert("sorry cannot reduce mark anymore")
    }else{
      this.mark --
    }
  }

  addByNumber(number:number){
    this.mark += number
  }

  minusByNumber(number:number){
    if (this.mark >= 5) {
      this.mark -= number
    }else if (this.mark < 5 && this.mark >0) {
      window.alert("sorry your number is less than 5")
    }else{
      window.alert('sorry you cannot reduce less than 0')
    }
  }
}
